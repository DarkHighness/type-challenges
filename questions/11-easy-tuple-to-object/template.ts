type TupleToObject<T extends readonly (string | symbol | number)[]> = { [P in T[number]]: P }
