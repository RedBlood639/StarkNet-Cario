import { useStarknet, useStarknetBlock } from "@starknet-react/core";

export function ConnectWallet() {
  const { account, connectBrowserWallet } = useStarknet();
  const { data, loading, error } = useStarknetBlock();

  if (loading) {
    return <>Loading</>;
  }

  if (account) {
    return <p>Account: {account}</p>;
  }

  console.log(data);

  return (
    <>
      <button onClick={connectBrowserWallet}>Connect</button>;
    </>
  );
}
