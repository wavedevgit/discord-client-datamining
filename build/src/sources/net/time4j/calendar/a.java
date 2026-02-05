package net.time4j.calendar;

import java.util.Locale;
import pt.f0;
import pt.u;
import pt.x;
import pt.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
abstract class a implements u {

    /* renamed from: d  reason: collision with root package name */
    private final Class f39805d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(Class cls) {
        this.f39805d = cls;
    }

    @Override // pt.u
    public f0 a() {
        return f0.f46601a;
    }

    @Override // pt.u
    public x b() {
        return null;
    }

    @Override // pt.u
    public String c(y yVar, Locale locale) {
        return net.time4j.calendar.service.a.a("chinese", yVar, locale);
    }

    @Override // pt.u
    public int j() {
        return 100;
    }

    @Override // pt.u
    /* renamed from: d */
    public pt.o h(f fVar, pt.d dVar) {
        return fVar;
    }
}
