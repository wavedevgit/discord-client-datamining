package net.time4j.calendar;

import bu.f0;
import bu.u;
import bu.x;
import bu.y;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
abstract class a implements u {

    /* renamed from: d  reason: collision with root package name */
    private final Class f37304d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(Class cls) {
        this.f37304d = cls;
    }

    @Override // bu.u
    public f0 a() {
        return f0.f7804a;
    }

    @Override // bu.u
    public x b() {
        return null;
    }

    @Override // bu.u
    public int c() {
        return 100;
    }

    @Override // bu.u
    public String j(y yVar, Locale locale) {
        return net.time4j.calendar.service.a.a("chinese", yVar, locale);
    }

    @Override // bu.u
    /* renamed from: d */
    public bu.o m(f fVar, bu.d dVar) {
        return fVar;
    }
}
