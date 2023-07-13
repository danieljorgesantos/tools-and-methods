# Creating and Displaying a Simple Plot
import matplotlib.pyplot as plt

x = [1, 2, 3, 4, 5]
y = [3, 5, 2, 6, 4]

plt.plot(x, y)

plt.xlabel('X-axis')
plt.ylabel('Y-axis')
plt.title('Simple Graph')

plt.show()

#---------------------------------------------------------------------------------


# Understanding Pylab in the Context of Matplotlib
# Comparing Pyplot and Pylab
# Exploring the Stateful Interface of PyLab
# Drawing Multiple Lines in a Single Figure

# Data for the first line
x1 = [1, 2, 3, 4, 5]
y1 = [3, 5, 2, 6, 4]

# Data for the second line
x2 = [1, 2, 3, 4, 5]
y2 = [2, 4, 1, 5, 3]

# Create a new figure
plt.figure()

# Plot the first line
plt.plot(x1, y1, label='Line 1')

# Plot the second line
plt.plot(x2, y2, label='Line 2')

# Add labels and title
plt.xlabel('X-axis')
plt.ylabel('Y-axis')
plt.title('Multiple Lines')

# Display a legend
plt.legend()

# Show the plot
plt.show()

#---------------------------------------------------------------------------------






# Adding Text Annotations and Labels to Plots
# Significance of the "Hold" Command in Matplotlib
# Modifying Tick Label Size for All Plots
# Choosing Between Scatter Graphs and Line Charts
# Generating Histograms in Matplotlib
# Utilizing Subplots in Matplotlib
# Customizing Axes for Improved Visuals
# Understanding the Purpose of twinx() in Matplotlib
# Matplotlib as Part of the SciPy Stack
# Finding Good Documentation for Matplotlib
# Alternatives to Matplotlib
# Exception Handling while Plotting Graphs