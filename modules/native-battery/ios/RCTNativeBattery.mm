#import "RCTNativeBattery.h"
#import <UIKit/UIKit.h>

@implementation RCTNativeBattery

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:(const facebook::react::ObjCTurboModule::InitParams &)params {
  return std::make_shared<facebook::react::NativeBatterySpecJSI>(params);
}

- (NSNumber *)getBatteryLevel {
  UIDevice *device = [UIDevice currentDevice];
  device.batteryMonitoringEnabled = YES;
  float batteryLevel = device.batteryLevel;
  return @(batteryLevel * 100.0);
}

+ (NSString *)moduleName {
  return @"NativeBattery";
}

@end
