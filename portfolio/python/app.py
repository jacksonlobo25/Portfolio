# Define input and output file paths
input_file = 'input.txt'
output_file = 'output.html'

# Open the input file and read lines
with open(input_file, 'r') as f:
    lines = f.readlines()

# Wrap each line with double quotes and add a comma at the end
wrapped_lines = [f'"{line.strip()}",\n' for line in lines]

# Write the wrapped lines to the output file
with open(output_file, 'w') as f:
    f.writelines(wrapped_lines)

print(f"Processed {len(wrapped_lines)} lines. Output saved to '{output_file}'.")


const ifconfigLines = [
  "eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500",
  "        inet 192.168.1.42  netmask 255.255.255.0  broadcast 192.168.1.255",
  "        inet6 fe80::a00:27ff:fe4e:66a1  prefixlen 64  scopeid 0x20<link>",
  "        ether 08:00:27:4e:66:a1  txqueuelen 1000  (Ethernet)",
  "        RX packets 12345  bytes 1.3 GB",
  "        TX packets 67890  bytes 2.6 GB",
  "",
  "lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536",
  "        inet 127.0.0.1  netmask 255.0.0.0",
  "        loop  txqueuelen 1000  (Local Loopback)",
  "        RX packets 9999  bytes 1.1 GB",
  "        TX packets 9999  bytes 1.1 GB",
  "",
  "wlan0: flags=4099<UP,BROADCAST,MULTICAST>  mtu 1500",
  "        inet 10.0.0.101  netmask 255.255.255.0  broadcast 10.0.0.255",
  "        ether 48:4d:7e:01:23:ab  txqueuelen 1000  (Wi-Fi)",
  "        RX packets 8888  bytes 2.1 GB",
  "        TX packets 7777  bytes 3.2 GB",
  "",
  "# Scan this to connect:"
];