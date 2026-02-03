package net.time4j.calendar;

import java.util.Locale;
import mt.f0;
import mt.u;
import mt.x;
import mt.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
abstract class a implements u {

    /* renamed from: d  reason: collision with root package name */
    private final Class f40345d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(Class cls) {
        this.f40345d = cls;
    }

    @Override // mt.u
    public f0 a() {
        return f0.f39404a;
    }

    @Override // mt.u
    public x b() {
        return null;
    }

    @Override // mt.u
    public int c() {
        return 100;
    }

    @Override // mt.u
    public String l(y yVar, Locale locale) {
        return net.time4j.calendar.service.a.a("chinese", yVar, locale);
    }

    @Override // mt.u
    /* renamed from: d */
    public mt.o h(f fVar, mt.d dVar) {
        return fVar;
    }
}
