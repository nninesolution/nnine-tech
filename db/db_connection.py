import psycopg2
from psycopg2 import OperationalError

def create_connection(db_name, user, password, host, port):
    connection = None
    try:
        connection = psycopg2.connect(
            database=db_name,
            user=user,
            password=password,
            host=host,
            port=port
        )
        print("Connection to PostgreSQL successful")
        return connection
    except OperationalError as e:
        print(f"Error: {e}")
        return None

# Replace these values with your PostgreSQL server details
db_name = "your_database_name"
user = "your_username"
password = "your_password"
host = "your_host"
port = "your_port"  # Typically, PostgreSQL uses port 5432

# Create a connection object
connection = create_connection(db_name, user, password, host, port)

# Now, you can use the 'connection' object to interact with the database
# For example, creating a cursor and executing SQL queries
if connection:
    cursor = connection.cursor()
    cursor.execute("SELECT version();")
    record = cursor.fetchone()
    print("You are connected to - ", record)

    # Don't forget to close the cursor and connection when you're done
    cursor.close()
    connection.close()

