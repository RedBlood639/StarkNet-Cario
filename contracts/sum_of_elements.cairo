# Computed the sum of the memory elements at addresses:
# arr + 0, arr + 1, /... , arr + (size - 1).
func array_sum(arr : felt*, size)->(sum):
    if size == 0:
        return (sum = 0)
    end

    # size of not zero
    let (sum_of_rest) = array_sum(arr = arr + 1, size = size - 1)
    return (sum[arr] + sum_of_rest)
end