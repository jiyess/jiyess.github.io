%Backward substitution
function x = backwardSubs(A,y,n)
x = zeros(n,1); %Matrix to be solved, x
for j = n:-1:1 %Decrement columnwise index on L'
  x(j) = y(j)/A(j,j); %Matrix is SPD, no need to check A(j,j) > 0
  for i = 1:j-1 %Rowwise on L'
      y(i) = y(i) - (A(j,i)*x(j));
  end
end
end %End function backwardSubs