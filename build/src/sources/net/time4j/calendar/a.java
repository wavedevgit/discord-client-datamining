package net.time4j.calendar;

import java.util.Locale;
import kt.f0;
import kt.u;
import kt.x;
import kt.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
abstract class a implements u {

    /* renamed from: d  reason: collision with root package name */
    private final Class f40306d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(Class cls) {
        this.f40306d = cls;
    }

    @Override // kt.u
    public f0 a() {
        return f0.f36677a;
    }

    @Override // kt.u
    public x b() {
        return null;
    }

    @Override // kt.u
    public int c() {
        return 100;
    }

    @Override // kt.u
    public String g(y yVar, Locale locale) {
        return net.time4j.calendar.service.a.a("chinese", yVar, locale);
    }

    @Override // kt.u
    /* renamed from: d */
    public kt.o i(f fVar, kt.d dVar) {
        return fVar;
    }
}
