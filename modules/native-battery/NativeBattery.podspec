require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
  s.name         = "NativeBattery"
  s.version      = package['version']
  s.summary      = package['description']
  s.description  = "A Turbo Native Module for accessing battery information"
  s.homepage     = "https://github.com/yourusername/uni-expo-test"
  s.license      = "MIT"
  s.author       = { "Your Name" => "your.email@example.com" }
  s.platforms    = { :ios => "13.4" }
  s.source       = { :git => "https://github.com/yourusername/uni-expo-test.git", :tag => "#{s.version}" }

  s.source_files = "ios/**/*.{h,m,mm,swift}"

  install_modules_dependencies(s)
end
