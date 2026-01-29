package net.time4j.calendar;

import java.util.Locale;
import jt.f0;
import jt.u;
import jt.x;
import jt.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
abstract class a implements u {

    /* renamed from: d  reason: collision with root package name */
    private final Class f40427d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(Class cls) {
        this.f40427d = cls;
    }

    @Override // jt.u
    public f0 a() {
        return f0.f32742a;
    }

    @Override // jt.u
    public x b() {
        return null;
    }

    @Override // jt.u
    public int h() {
        return 100;
    }

    @Override // jt.u
    public String k(y yVar, Locale locale) {
        return net.time4j.calendar.service.a.a("chinese", yVar, locale);
    }

    @Override // jt.u
    /* renamed from: d */
    public jt.o c(f fVar, jt.d dVar) {
        return fVar;
    }
}
