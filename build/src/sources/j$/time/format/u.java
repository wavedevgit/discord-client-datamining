package j$.time.format;

import j$.time.DateTimeException;
import j$.time.DayOfWeek;
import j$.time.Instant;
import j$.time.LocalDate;
import j$.time.LocalTime;
import j$.time.Month;
import j$.time.ZoneOffset;
import j$.time.chrono.ChronoLocalDate;
import j$.time.temporal.TemporalAccessor;
import j$.time.temporal.TemporalQuery;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class u implements TemporalAccessor {

    /* renamed from: b  reason: collision with root package name */
    public j$.time.j f29531b;

    /* renamed from: c  reason: collision with root package name */
    public j$.time.chrono.j f29532c;

    /* renamed from: d  reason: collision with root package name */
    public boolean f29533d;

    /* renamed from: e  reason: collision with root package name */
    public v f29534e;

    /* renamed from: f  reason: collision with root package name */
    public ChronoLocalDate f29535f;

    /* renamed from: g  reason: collision with root package name */
    public LocalTime f29536g;

    /* renamed from: a  reason: collision with root package name */
    public final Map f29530a = new HashMap();

    /* renamed from: h  reason: collision with root package name */
    public j$.time.h f29537h = j$.time.h.f29542b;

    @Override // j$.time.temporal.TemporalAccessor
    public final boolean j(j$.time.temporal.n nVar) {
        if (((HashMap) this.f29530a).containsKey(nVar)) {
            return true;
        }
        ChronoLocalDate chronoLocalDate = this.f29535f;
        if (chronoLocalDate == null || !chronoLocalDate.j(nVar)) {
            LocalTime localTime = this.f29536g;
            if (localTime == null || !localTime.j(nVar)) {
                return (nVar == null || (nVar instanceof j$.time.temporal.a) || !nVar.r(this)) ? false : true;
            }
            return true;
        }
        return true;
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final long m(j$.time.temporal.n nVar) {
        Objects.requireNonNull(nVar, "field");
        Long l10 = (Long) ((HashMap) this.f29530a).get(nVar);
        if (l10 != null) {
            return l10.longValue();
        }
        ChronoLocalDate chronoLocalDate = this.f29535f;
        if (chronoLocalDate != null && chronoLocalDate.j(nVar)) {
            return this.f29535f.m(nVar);
        }
        LocalTime localTime = this.f29536g;
        if (localTime != null && localTime.j(nVar)) {
            return this.f29536g.m(nVar);
        }
        if (nVar instanceof j$.time.temporal.a) {
            throw new DateTimeException("Unsupported field: " + nVar);
        }
        return nVar.B(this);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final Object a(TemporalQuery temporalQuery) {
        if (temporalQuery == j$.time.temporal.o.f29565a) {
            return this.f29531b;
        }
        if (temporalQuery == j$.time.temporal.o.f29566b) {
            return this.f29532c;
        }
        if (temporalQuery == j$.time.temporal.o.f29570f) {
            ChronoLocalDate chronoLocalDate = this.f29535f;
            if (chronoLocalDate != null) {
                return LocalDate.t(chronoLocalDate);
            }
            return null;
        } else if (temporalQuery == j$.time.temporal.o.f29571g) {
            return this.f29536g;
        } else {
            if (temporalQuery == j$.time.temporal.o.f29569e || temporalQuery == j$.time.temporal.o.f29568d) {
                return temporalQuery.queryFrom(this);
            }
            if (temporalQuery == j$.time.temporal.o.f29567c) {
                return null;
            }
            return temporalQuery.queryFrom(this);
        }
    }

    public final void G(j$.time.temporal.n nVar, j$.time.temporal.a aVar, Long l10) {
        Long l11 = (Long) ((HashMap) this.f29530a).put(aVar, l10);
        if (l11 == null || l11.longValue() == l10.longValue()) {
            return;
        }
        throw new DateTimeException("Conflict found: " + aVar + " " + l11 + " differs from " + aVar + " " + l10 + " while resolving  " + nVar);
    }

    public final void w() {
        if (((HashMap) this.f29530a).containsKey(j$.time.temporal.a.INSTANT_SECONDS)) {
            j$.time.j jVar = this.f29531b;
            if (jVar != null) {
                x(jVar);
                return;
            }
            Long l10 = (Long) ((HashMap) this.f29530a).get(j$.time.temporal.a.OFFSET_SECONDS);
            if (l10 != null) {
                x(ZoneOffset.ofTotalSeconds(l10.intValue()));
            }
        }
    }

    public final void x(j$.time.j jVar) {
        Map map = this.f29530a;
        j$.time.temporal.a aVar = j$.time.temporal.a.INSTANT_SECONDS;
        Instant r10 = Instant.r(((Long) ((HashMap) map).remove(aVar)).longValue(), 0);
        ((j$.time.chrono.k) this.f29532c).getClass();
        Objects.requireNonNull(jVar, "zone");
        j$.time.m r11 = j$.time.m.r(r10.getEpochSecond(), r10.getNano(), jVar);
        F(r11.f29548a.f29433a);
        G(aVar, j$.time.temporal.a.SECOND_OF_DAY, Long.valueOf(r11.f29548a.f29434b.toSecondOfDay()));
    }

    public final void t() {
        TemporalAccessor temporalAccessor;
        TemporalAccessor k10;
        j$.time.chrono.j jVar = this.f29532c;
        Map map = this.f29530a;
        v vVar = this.f29534e;
        ((j$.time.chrono.k) jVar).getClass();
        j$.time.temporal.a aVar = j$.time.temporal.a.EPOCH_DAY;
        HashMap hashMap = (HashMap) map;
        if (hashMap.containsKey(aVar)) {
            temporalAccessor = LocalDate.ofEpochDay(((Long) hashMap.remove(aVar)).longValue());
        } else {
            j$.time.temporal.a aVar2 = j$.time.temporal.a.PROLEPTIC_MONTH;
            Long l10 = (Long) hashMap.remove(aVar2);
            if (l10 != null) {
                if (vVar != v.LENIENT) {
                    aVar2.E(l10.longValue());
                }
                j$.time.chrono.a.r(hashMap, j$.time.temporal.a.MONTH_OF_YEAR, Math.floorMod(l10.longValue(), 12L) + 1);
                j$.time.chrono.a.r(hashMap, j$.time.temporal.a.YEAR, Math.floorDiv(l10.longValue(), 12L));
            }
            j$.time.temporal.a aVar3 = j$.time.temporal.a.YEAR_OF_ERA;
            Long l11 = (Long) hashMap.remove(aVar3);
            if (l11 != null) {
                if (vVar != v.LENIENT) {
                    aVar3.E(l11.longValue());
                }
                Long l12 = (Long) hashMap.remove(j$.time.temporal.a.ERA);
                if (l12 == null) {
                    j$.time.temporal.a aVar4 = j$.time.temporal.a.YEAR;
                    Long l13 = (Long) hashMap.get(aVar4);
                    if (vVar != v.STRICT) {
                        j$.time.chrono.a.r(hashMap, aVar4, (l13 == null || l13.longValue() > 0) ? l11.longValue() : Math.subtractExact(1L, l11.longValue()));
                    } else if (l13 != null) {
                        int i10 = (l13.longValue() > 0L ? 1 : (l13.longValue() == 0L ? 0 : -1));
                        long longValue = l11.longValue();
                        if (i10 <= 0) {
                            longValue = Math.subtractExact(1L, longValue);
                        }
                        j$.time.chrono.a.r(hashMap, aVar4, longValue);
                    } else {
                        hashMap.put(aVar3, l11);
                    }
                } else if (l12.longValue() == 1) {
                    j$.time.chrono.a.r(hashMap, j$.time.temporal.a.YEAR, l11.longValue());
                } else if (l12.longValue() != 0) {
                    throw new DateTimeException("Invalid value for era: " + l12);
                } else {
                    j$.time.chrono.a.r(hashMap, j$.time.temporal.a.YEAR, Math.subtractExact(1L, l11.longValue()));
                }
            } else {
                j$.time.temporal.a aVar5 = j$.time.temporal.a.ERA;
                if (hashMap.containsKey(aVar5)) {
                    aVar5.E(((Long) hashMap.get(aVar5)).longValue());
                }
            }
            j$.time.temporal.a aVar6 = j$.time.temporal.a.YEAR;
            if (hashMap.containsKey(aVar6)) {
                j$.time.temporal.a aVar7 = j$.time.temporal.a.MONTH_OF_YEAR;
                boolean z10 = true;
                if (hashMap.containsKey(aVar7)) {
                    j$.time.temporal.a aVar8 = j$.time.temporal.a.DAY_OF_MONTH;
                    if (hashMap.containsKey(aVar8)) {
                        int a10 = aVar6.f29553b.a(((Long) hashMap.remove(aVar6)).longValue(), aVar6);
                        if (vVar == v.LENIENT) {
                            temporalAccessor = LocalDate.of(a10, 1, 1).plusMonths(Math.subtractExact(((Long) hashMap.remove(aVar7)).longValue(), 1L)).F(Math.subtractExact(((Long) hashMap.remove(aVar8)).longValue(), 1L));
                        } else {
                            int a11 = aVar7.f29553b.a(((Long) hashMap.remove(aVar7)).longValue(), aVar7);
                            int a12 = aVar8.f29553b.a(((Long) hashMap.remove(aVar8)).longValue(), aVar8);
                            if (vVar == v.SMART) {
                                if (a11 == 4 || a11 == 6 || a11 == 9 || a11 == 11) {
                                    a12 = Math.min(a12, 30);
                                } else if (a11 == 2) {
                                    Month month = Month.FEBRUARY;
                                    long j10 = a10;
                                    int i11 = j$.time.i.f29544a;
                                    if ((3 & j10) != 0 || (j10 % 100 == 0 && j10 % 400 != 0)) {
                                        z10 = false;
                                    }
                                    a12 = Math.min(a12, month.t(z10));
                                }
                            }
                            temporalAccessor = LocalDate.of(a10, a11, a12);
                        }
                    } else {
                        j$.time.temporal.a aVar9 = j$.time.temporal.a.ALIGNED_WEEK_OF_MONTH;
                        if (hashMap.containsKey(aVar9)) {
                            j$.time.temporal.a aVar10 = j$.time.temporal.a.ALIGNED_DAY_OF_WEEK_IN_MONTH;
                            if (hashMap.containsKey(aVar10)) {
                                int a13 = aVar6.f29553b.a(((Long) hashMap.remove(aVar6)).longValue(), aVar6);
                                if (vVar == v.LENIENT) {
                                    temporalAccessor = LocalDate.of(a13, 1, 1).p(Math.subtractExact(((Long) hashMap.remove(aVar7)).longValue(), 1L), j$.time.temporal.b.MONTHS).p(Math.subtractExact(((Long) hashMap.remove(aVar9)).longValue(), 1L), j$.time.temporal.b.WEEKS).p(Math.subtractExact(((Long) hashMap.remove(aVar10)).longValue(), 1L), j$.time.temporal.b.DAYS);
                                } else {
                                    int a14 = aVar7.f29553b.a(((Long) hashMap.remove(aVar7)).longValue(), aVar7);
                                    temporalAccessor = LocalDate.of(a13, a14, 1).p((aVar10.f29553b.a(((Long) hashMap.remove(aVar10)).longValue(), aVar10) - 1) + ((aVar9.f29553b.a(((Long) hashMap.remove(aVar9)).longValue(), aVar9) - 1) * 7), j$.time.temporal.b.DAYS);
                                    if (vVar == v.STRICT && temporalAccessor.g(aVar7) != a14) {
                                        throw new DateTimeException("Strict mode rejected resolved date as it is in a different month");
                                    }
                                }
                            } else {
                                j$.time.temporal.a aVar11 = j$.time.temporal.a.DAY_OF_WEEK;
                                if (hashMap.containsKey(aVar11)) {
                                    int a15 = aVar6.f29553b.a(((Long) hashMap.remove(aVar6)).longValue(), aVar6);
                                    if (vVar == v.LENIENT) {
                                        temporalAccessor = j$.time.chrono.a.t(LocalDate.of(a15, 1, 1), Math.subtractExact(((Long) hashMap.remove(aVar7)).longValue(), 1L), Math.subtractExact(((Long) hashMap.remove(aVar9)).longValue(), 1L), Math.subtractExact(((Long) hashMap.remove(aVar11)).longValue(), 1L));
                                    } else {
                                        int a16 = aVar7.f29553b.a(((Long) hashMap.remove(aVar7)).longValue(), aVar7);
                                        temporalAccessor = LocalDate.of(a15, a16, 1).p((aVar9.f29553b.a(((Long) hashMap.remove(aVar9)).longValue(), aVar9) - 1) * 7, j$.time.temporal.b.DAYS).k(new j$.time.temporal.m(DayOfWeek.t(aVar11.f29553b.a(((Long) hashMap.remove(aVar11)).longValue(), aVar11)).r()));
                                        if (vVar == v.STRICT && temporalAccessor.g(aVar7) != a16) {
                                            throw new DateTimeException("Strict mode rejected resolved date as it is in a different month");
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                j$.time.temporal.a aVar12 = j$.time.temporal.a.DAY_OF_YEAR;
                if (hashMap.containsKey(aVar12)) {
                    int a17 = aVar6.f29553b.a(((Long) hashMap.remove(aVar6)).longValue(), aVar6);
                    temporalAccessor = vVar == v.LENIENT ? LocalDate.C(a17, 1).p(Math.subtractExact(((Long) hashMap.remove(aVar12)).longValue(), 1L), j$.time.temporal.b.DAYS) : LocalDate.C(a17, aVar12.f29553b.a(((Long) hashMap.remove(aVar12)).longValue(), aVar12));
                } else {
                    j$.time.temporal.a aVar13 = j$.time.temporal.a.ALIGNED_WEEK_OF_YEAR;
                    if (hashMap.containsKey(aVar13)) {
                        j$.time.temporal.a aVar14 = j$.time.temporal.a.ALIGNED_DAY_OF_WEEK_IN_YEAR;
                        if (hashMap.containsKey(aVar14)) {
                            int a18 = aVar6.f29553b.a(((Long) hashMap.remove(aVar6)).longValue(), aVar6);
                            if (vVar == v.LENIENT) {
                                temporalAccessor = LocalDate.C(a18, 1).p(Math.subtractExact(((Long) hashMap.remove(aVar13)).longValue(), 1L), j$.time.temporal.b.WEEKS).p(Math.subtractExact(((Long) hashMap.remove(aVar14)).longValue(), 1L), j$.time.temporal.b.DAYS);
                            } else {
                                k10 = LocalDate.C(a18, 1).p((aVar14.f29553b.a(((Long) hashMap.remove(aVar14)).longValue(), aVar14) - 1) + ((aVar13.f29553b.a(((Long) hashMap.remove(aVar13)).longValue(), aVar13) - 1) * 7), j$.time.temporal.b.DAYS);
                                if (vVar == v.STRICT && k10.g(aVar6) != a18) {
                                    throw new DateTimeException("Strict mode rejected resolved date as it is in a different year");
                                }
                                temporalAccessor = k10;
                            }
                        } else {
                            j$.time.temporal.a aVar15 = j$.time.temporal.a.DAY_OF_WEEK;
                            if (hashMap.containsKey(aVar15)) {
                                int a19 = aVar6.f29553b.a(((Long) hashMap.remove(aVar6)).longValue(), aVar6);
                                if (vVar == v.LENIENT) {
                                    temporalAccessor = j$.time.chrono.a.t(LocalDate.C(a19, 1), 0L, Math.subtractExact(((Long) hashMap.remove(aVar13)).longValue(), 1L), Math.subtractExact(((Long) hashMap.remove(aVar15)).longValue(), 1L));
                                } else {
                                    k10 = LocalDate.C(a19, 1).p((aVar13.f29553b.a(((Long) hashMap.remove(aVar13)).longValue(), aVar13) - 1) * 7, j$.time.temporal.b.DAYS).k(new j$.time.temporal.m(DayOfWeek.t(aVar15.f29553b.a(((Long) hashMap.remove(aVar15)).longValue(), aVar15)).r()));
                                    if (vVar == v.STRICT && k10.g(aVar6) != a19) {
                                        throw new DateTimeException("Strict mode rejected resolved date as it is in a different year");
                                    }
                                    temporalAccessor = k10;
                                }
                            }
                        }
                    }
                }
            }
            temporalAccessor = null;
        }
        F((LocalDate) temporalAccessor);
    }

    public final void F(ChronoLocalDate chronoLocalDate) {
        ChronoLocalDate chronoLocalDate2 = this.f29535f;
        if (chronoLocalDate2 != null) {
            if (chronoLocalDate == null || chronoLocalDate2.equals(chronoLocalDate)) {
                return;
            }
            throw new DateTimeException("Conflict found: Fields resolved to two different dates: " + this.f29535f + " " + chronoLocalDate);
        } else if (chronoLocalDate != null) {
            j$.time.chrono.j jVar = this.f29532c;
            chronoLocalDate.f();
            if (!((j$.time.chrono.a) jVar).equals(j$.time.chrono.k.f29464a)) {
                throw new DateTimeException("ChronoLocalDate must use the effective parsed chronology: " + this.f29532c);
            }
            this.f29535f = chronoLocalDate;
        }
    }

    public final void C() {
        Map map = this.f29530a;
        j$.time.temporal.a aVar = j$.time.temporal.a.CLOCK_HOUR_OF_DAY;
        if (((HashMap) map).containsKey(aVar)) {
            long longValue = ((Long) ((HashMap) this.f29530a).remove(aVar)).longValue();
            v vVar = this.f29534e;
            if (vVar == v.STRICT || (vVar == v.SMART && longValue != 0)) {
                aVar.E(longValue);
            }
            j$.time.temporal.a aVar2 = j$.time.temporal.a.HOUR_OF_DAY;
            if (longValue == 24) {
                longValue = 0;
            }
            G(aVar, aVar2, Long.valueOf(longValue));
        }
        Map map2 = this.f29530a;
        j$.time.temporal.a aVar3 = j$.time.temporal.a.CLOCK_HOUR_OF_AMPM;
        if (((HashMap) map2).containsKey(aVar3)) {
            long longValue2 = ((Long) ((HashMap) this.f29530a).remove(aVar3)).longValue();
            v vVar2 = this.f29534e;
            if (vVar2 == v.STRICT || (vVar2 == v.SMART && longValue2 != 0)) {
                aVar3.E(longValue2);
            }
            G(aVar3, j$.time.temporal.a.HOUR_OF_AMPM, Long.valueOf(longValue2 != 12 ? longValue2 : 0L));
        }
        Map map3 = this.f29530a;
        j$.time.temporal.a aVar4 = j$.time.temporal.a.AMPM_OF_DAY;
        if (((HashMap) map3).containsKey(aVar4)) {
            Map map4 = this.f29530a;
            j$.time.temporal.a aVar5 = j$.time.temporal.a.HOUR_OF_AMPM;
            if (((HashMap) map4).containsKey(aVar5)) {
                long longValue3 = ((Long) ((HashMap) this.f29530a).remove(aVar4)).longValue();
                long longValue4 = ((Long) ((HashMap) this.f29530a).remove(aVar5)).longValue();
                if (this.f29534e == v.LENIENT) {
                    G(aVar4, j$.time.temporal.a.HOUR_OF_DAY, Long.valueOf(Math.addExact(Math.multiplyExact(longValue3, 12L), longValue4)));
                } else {
                    aVar4.E(longValue3);
                    aVar5.E(longValue3);
                    G(aVar4, j$.time.temporal.a.HOUR_OF_DAY, Long.valueOf((longValue3 * 12) + longValue4));
                }
            }
        }
        Map map5 = this.f29530a;
        j$.time.temporal.a aVar6 = j$.time.temporal.a.NANO_OF_DAY;
        if (((HashMap) map5).containsKey(aVar6)) {
            long longValue5 = ((Long) ((HashMap) this.f29530a).remove(aVar6)).longValue();
            if (this.f29534e != v.LENIENT) {
                aVar6.E(longValue5);
            }
            G(aVar6, j$.time.temporal.a.HOUR_OF_DAY, Long.valueOf(longValue5 / 3600000000000L));
            G(aVar6, j$.time.temporal.a.MINUTE_OF_HOUR, Long.valueOf((longValue5 / 60000000000L) % 60));
            G(aVar6, j$.time.temporal.a.SECOND_OF_MINUTE, Long.valueOf((longValue5 / 1000000000) % 60));
            G(aVar6, j$.time.temporal.a.NANO_OF_SECOND, Long.valueOf(longValue5 % 1000000000));
        }
        Map map6 = this.f29530a;
        j$.time.temporal.a aVar7 = j$.time.temporal.a.MICRO_OF_DAY;
        if (((HashMap) map6).containsKey(aVar7)) {
            long longValue6 = ((Long) ((HashMap) this.f29530a).remove(aVar7)).longValue();
            if (this.f29534e != v.LENIENT) {
                aVar7.E(longValue6);
            }
            G(aVar7, j$.time.temporal.a.SECOND_OF_DAY, Long.valueOf(longValue6 / 1000000));
            G(aVar7, j$.time.temporal.a.MICRO_OF_SECOND, Long.valueOf(longValue6 % 1000000));
        }
        Map map7 = this.f29530a;
        j$.time.temporal.a aVar8 = j$.time.temporal.a.MILLI_OF_DAY;
        if (((HashMap) map7).containsKey(aVar8)) {
            long longValue7 = ((Long) ((HashMap) this.f29530a).remove(aVar8)).longValue();
            if (this.f29534e != v.LENIENT) {
                aVar8.E(longValue7);
            }
            G(aVar8, j$.time.temporal.a.SECOND_OF_DAY, Long.valueOf(longValue7 / 1000));
            G(aVar8, j$.time.temporal.a.MILLI_OF_SECOND, Long.valueOf(longValue7 % 1000));
        }
        Map map8 = this.f29530a;
        j$.time.temporal.a aVar9 = j$.time.temporal.a.SECOND_OF_DAY;
        if (((HashMap) map8).containsKey(aVar9)) {
            long longValue8 = ((Long) ((HashMap) this.f29530a).remove(aVar9)).longValue();
            if (this.f29534e != v.LENIENT) {
                aVar9.E(longValue8);
            }
            G(aVar9, j$.time.temporal.a.HOUR_OF_DAY, Long.valueOf(longValue8 / 3600));
            G(aVar9, j$.time.temporal.a.MINUTE_OF_HOUR, Long.valueOf((longValue8 / 60) % 60));
            G(aVar9, j$.time.temporal.a.SECOND_OF_MINUTE, Long.valueOf(longValue8 % 60));
        }
        Map map9 = this.f29530a;
        j$.time.temporal.a aVar10 = j$.time.temporal.a.MINUTE_OF_DAY;
        if (((HashMap) map9).containsKey(aVar10)) {
            long longValue9 = ((Long) ((HashMap) this.f29530a).remove(aVar10)).longValue();
            if (this.f29534e != v.LENIENT) {
                aVar10.E(longValue9);
            }
            G(aVar10, j$.time.temporal.a.HOUR_OF_DAY, Long.valueOf(longValue9 / 60));
            G(aVar10, j$.time.temporal.a.MINUTE_OF_HOUR, Long.valueOf(longValue9 % 60));
        }
        Map map10 = this.f29530a;
        j$.time.temporal.a aVar11 = j$.time.temporal.a.NANO_OF_SECOND;
        if (((HashMap) map10).containsKey(aVar11)) {
            long longValue10 = ((Long) ((HashMap) this.f29530a).get(aVar11)).longValue();
            v vVar3 = this.f29534e;
            v vVar4 = v.LENIENT;
            if (vVar3 != vVar4) {
                aVar11.E(longValue10);
            }
            Map map11 = this.f29530a;
            j$.time.temporal.a aVar12 = j$.time.temporal.a.MICRO_OF_SECOND;
            if (((HashMap) map11).containsKey(aVar12)) {
                long longValue11 = ((Long) ((HashMap) this.f29530a).remove(aVar12)).longValue();
                if (this.f29534e != vVar4) {
                    aVar12.E(longValue11);
                }
                longValue10 = (longValue10 % 1000) + (longValue11 * 1000);
                G(aVar12, aVar11, Long.valueOf(longValue10));
            }
            Map map12 = this.f29530a;
            j$.time.temporal.a aVar13 = j$.time.temporal.a.MILLI_OF_SECOND;
            if (((HashMap) map12).containsKey(aVar13)) {
                long longValue12 = ((Long) ((HashMap) this.f29530a).remove(aVar13)).longValue();
                if (this.f29534e != vVar4) {
                    aVar13.E(longValue12);
                }
                G(aVar13, aVar11, Long.valueOf((longValue10 % 1000000) + (longValue12 * 1000000)));
            }
        }
        Map map13 = this.f29530a;
        j$.time.temporal.a aVar14 = j$.time.temporal.a.HOUR_OF_DAY;
        if (((HashMap) map13).containsKey(aVar14)) {
            Map map14 = this.f29530a;
            j$.time.temporal.a aVar15 = j$.time.temporal.a.MINUTE_OF_HOUR;
            if (((HashMap) map14).containsKey(aVar15)) {
                Map map15 = this.f29530a;
                j$.time.temporal.a aVar16 = j$.time.temporal.a.SECOND_OF_MINUTE;
                if (((HashMap) map15).containsKey(aVar16) && ((HashMap) this.f29530a).containsKey(aVar11)) {
                    B(((Long) ((HashMap) this.f29530a).remove(aVar14)).longValue(), ((Long) ((HashMap) this.f29530a).remove(aVar15)).longValue(), ((Long) ((HashMap) this.f29530a).remove(aVar16)).longValue(), ((Long) ((HashMap) this.f29530a).remove(aVar11)).longValue());
                }
            }
        }
    }

    public final void B(long j10, long j11, long j12, long j13) {
        if (this.f29534e == v.LENIENT) {
            long addExact = Math.addExact(Math.addExact(Math.addExact(Math.multiplyExact(j10, 3600000000000L), Math.multiplyExact(j11, 60000000000L)), Math.multiplyExact(j12, 1000000000L)), j13);
            int floorDiv = (int) Math.floorDiv(addExact, 86400000000000L);
            E(LocalTime.x(Math.floorMod(addExact, 86400000000000L)), floorDiv == 0 ? j$.time.h.f29542b : new j$.time.h(floorDiv));
            return;
        }
        j$.time.temporal.a aVar = j$.time.temporal.a.MINUTE_OF_HOUR;
        int a10 = aVar.f29553b.a(j11, aVar);
        j$.time.temporal.a aVar2 = j$.time.temporal.a.NANO_OF_SECOND;
        int a11 = aVar2.f29553b.a(j13, aVar2);
        if (this.f29534e == v.SMART && j10 == 24 && a10 == 0 && j12 == 0 && a11 == 0) {
            E(LocalTime.f29435e, new j$.time.h(1));
            return;
        }
        j$.time.temporal.a aVar3 = j$.time.temporal.a.HOUR_OF_DAY;
        int a12 = aVar3.f29553b.a(j10, aVar3);
        j$.time.temporal.a aVar4 = j$.time.temporal.a.SECOND_OF_MINUTE;
        E(LocalTime.of(a12, a10, aVar4.f29553b.a(j12, aVar4), a11), j$.time.h.f29542b);
    }

    public final void E(LocalTime localTime, j$.time.h hVar) {
        LocalTime localTime2 = this.f29536g;
        if (localTime2 != null) {
            if (!localTime2.equals(localTime)) {
                throw new DateTimeException("Conflict found: Fields resolved to different times: " + this.f29536g + " " + localTime);
            }
            j$.time.h hVar2 = this.f29537h;
            hVar2.getClass();
            j$.time.h hVar3 = j$.time.h.f29542b;
            if (hVar2 != hVar3 && hVar != hVar3 && !this.f29537h.equals(hVar)) {
                throw new DateTimeException("Conflict found: Fields resolved to different excess periods: " + this.f29537h + " " + hVar);
            }
            this.f29537h = hVar;
            return;
        }
        this.f29536g = localTime;
        this.f29537h = hVar;
    }

    public final void r(TemporalAccessor temporalAccessor) {
        Iterator it = ((HashMap) this.f29530a).entrySet().iterator();
        while (it.hasNext()) {
            Map.Entry entry = (Map.Entry) it.next();
            j$.time.temporal.n nVar = (j$.time.temporal.n) entry.getKey();
            if (temporalAccessor.j(nVar)) {
                try {
                    long m10 = temporalAccessor.m(nVar);
                    long longValue = ((Long) entry.getValue()).longValue();
                    if (m10 != longValue) {
                        throw new DateTimeException("Conflict found: Field " + nVar + " " + m10 + " differs from " + nVar + " " + longValue + " derived from " + temporalAccessor);
                    }
                    it.remove();
                } catch (RuntimeException unused) {
                    continue;
                }
            }
        }
    }

    public final String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(this.f29530a);
        sb2.append(',');
        sb2.append(this.f29532c);
        if (this.f29531b != null) {
            sb2.append(',');
            sb2.append(this.f29531b);
        }
        if (this.f29535f != null || this.f29536g != null) {
            sb2.append(" resolved to ");
            ChronoLocalDate chronoLocalDate = this.f29535f;
            if (chronoLocalDate != null) {
                sb2.append(chronoLocalDate);
                if (this.f29536g != null) {
                    sb2.append('T');
                    sb2.append(this.f29536g);
                }
            } else {
                sb2.append(this.f29536g);
            }
        }
        return sb2.toString();
    }
}
