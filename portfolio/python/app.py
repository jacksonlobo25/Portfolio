# Define input and output file paths
input_file = 'input.txt'
output_file = 'output.html'

# Open the input file and read lines
with open(input_file, 'r') as f:
    lines = f.readlines()

# Wrap each line with double quotes
wrapped_lines = [f'"{line.strip()}"\n' for line in lines]

# Write the wrapped lines to the output file
with open(output_file, 'w') as f:
    f.writelines(wrapped_lines)

print(f"Processed {len(wrapped_lines)} lines. Output saved to '{output_file}'.")
