package net.time4j.calendar;

import java.util.Locale;
import rt.f0;
import rt.u;
import rt.x;
import rt.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
abstract class a implements u {

    /* renamed from: d  reason: collision with root package name */
    private final Class f39208d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(Class cls) {
        this.f39208d = cls;
    }

    @Override // rt.u
    public f0 a() {
        return f0.f49550a;
    }

    @Override // rt.u
    public String b(y yVar, Locale locale) {
        return net.time4j.calendar.service.a.a("chinese", yVar, locale);
    }

    @Override // rt.u
    public x c() {
        return null;
    }

    @Override // rt.u
    public int g() {
        return 100;
    }

    @Override // rt.u
    /* renamed from: d */
    public rt.o k(f fVar, rt.d dVar) {
        return fVar;
    }
}
