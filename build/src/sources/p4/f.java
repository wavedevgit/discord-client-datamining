package p4;

import android.database.Cursor;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class f implements e {

    /* renamed from: a  reason: collision with root package name */
    private final r3.u f44858a;

    /* renamed from: b  reason: collision with root package name */
    private final r3.i f44859b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a extends r3.i {
        a(r3.u uVar) {
            super(uVar);
        }

        @Override // r3.a0
        public String e() {
            return "INSERT OR REPLACE INTO `Preference` (`key`,`long_value`) VALUES (?,?)";
        }

        @Override // r3.i
        /* renamed from: k */
        public void i(x3.k kVar, d dVar) {
            if (dVar.a() == null) {
                kVar.P1(1);
            } else {
                kVar.h1(1, dVar.a());
            }
            if (dVar.b() == null) {
                kVar.P1(2);
            } else {
                kVar.w1(2, dVar.b().longValue());
            }
        }
    }

    public f(r3.u uVar) {
        this.f44858a = uVar;
        this.f44859b = new a(uVar);
    }

    public static List c() {
        return Collections.EMPTY_LIST;
    }

    @Override // p4.e
    public void a(d dVar) {
        this.f44858a.d();
        this.f44858a.e();
        try {
            this.f44859b.j(dVar);
            this.f44858a.A();
        } finally {
            this.f44858a.i();
        }
    }

    @Override // p4.e
    public Long b(String str) {
        r3.x k10 = r3.x.k("SELECT long_value FROM Preference where `key`=?", 1);
        if (str == null) {
            k10.P1(1);
        } else {
            k10.h1(1, str);
        }
        this.f44858a.d();
        Long l10 = null;
        Cursor b10 = t3.b.b(this.f44858a, k10, false, null);
        try {
            if (b10.moveToFirst() && !b10.isNull(0)) {
                l10 = Long.valueOf(b10.getLong(0));
            }
            return l10;
        } finally {
            b10.close();
            k10.y();
        }
    }
}
