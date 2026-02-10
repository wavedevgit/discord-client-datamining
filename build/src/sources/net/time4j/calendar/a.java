package net.time4j.calendar;

import java.util.Locale;
import st.f0;
import st.u;
import st.x;
import st.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
abstract class a implements u {

    /* renamed from: d  reason: collision with root package name */
    private final Class f38300d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(Class cls) {
        this.f38300d = cls;
    }

    @Override // st.u
    public f0 a() {
        return f0.f50375a;
    }

    @Override // st.u
    public x b() {
        return null;
    }

    @Override // st.u
    public int c() {
        return 100;
    }

    @Override // st.u
    public String g(y yVar, Locale locale) {
        return net.time4j.calendar.service.a.a("chinese", yVar, locale);
    }

    @Override // st.u
    /* renamed from: d */
    public st.o h(f fVar, st.d dVar) {
        return fVar;
    }
}
