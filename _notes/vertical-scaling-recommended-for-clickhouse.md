---
title: Vertical scaling is recommended for ClickHouse
---

ClickHouse ถูกออกแบบมาให้ใช้ทรัพยาการของ hardware ให้ได้เต็มประสิทธิภาพจนถึงขีดจำกัด และเครื่อง ClickHouse เครื่องเดียว ที่มี CPU กับ memory ที่เพียงพอจะสามารถจัดการข้อมูลขนาด terabytes ได้อย่างสบาย ๆ ทั้ง high ingest และ query rates

ดังนั้นจะแนะนำให้ทำ vertical scaling ก่อน แล้วถ้าไม่ไหวจริง ๆ ค่อยเลือกทาง horizontal scaling หรือถ้าข้อมูลมีขนาดใหญ่มาก ๆ ที่ไม่สามารถอยู่ในเครื่องเดียวได้ ก็ให้ทำ shard แยกข้อมูลออกมาไว้อีกเครื่องหนึ่ง

## References

* [ClickHouse at Scale](https://www.youtube.com/watch?v=vBjCJtw_Ei0)
* [Sizing and Hardware Recommendations](https://clickhouse.com/docs/guides/sizing-and-hardware-recommendations#replicas)
