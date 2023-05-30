import SearchBar from './components/SearchBar';
import { describe, it, expect, vi } from 'vitest';
import {
render,
screen,
fireEvent,
waitFor,
} from '@testing-library/react';

import React from "react";



describe("SearchBar component", () => {
    it("should render the component correctly", () => {
      const { getByText, getByPlaceholderText } = render(
        <SearchBar query="" setQuery={() => {}} />
      );
  
      const header = getByText("JobChaserz");
      const input = getByPlaceholderText("Search for jobs");
  
      expect(header).toBeInTheDocument();
      expect(input).toBeInTheDocument();
    });
  
    it("should call setQuery with the input value on change", () => {
      const setQueryMock = vi.fn();
      const { getByPlaceholderText } = render(
        <SearchBar query="" setQuery={setQueryMock} />
      );
  
      const input = getByPlaceholderText("Search for jobs");
      const testValue = "test input";
  
      fireEvent.change(input, { target: { value: testValue } });
  
      expect(setQueryMock.mock.calls.length).toBe(1);
      expect(setQueryMock.mock.calls[0][0]).toBe(testValue);
    });
  });