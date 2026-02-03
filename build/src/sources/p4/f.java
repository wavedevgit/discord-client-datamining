package p4;

import android.database.Cursor;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class f implements e {

    /* renamed from: a  reason: collision with root package name */
    private final r3.u f44970a;

    /* renamed from: b  reason: collision with root package name */
    private final r3.i f44971b;

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
        this.f44970a = uVar;
        this.f44971b = new a(uVar);
    }

    public static List c() {
        return Collections.EMPTY_LIST;
    }

    @Override // p4.e
    public void a(d dVar) {
        this.f44970a.d();
        this.f44970a.e();
        try {
            this.f44971b.j(dVar);
            this.f44970a.A();
        } finally {
            this.f44970a.i();
        }
    }

    @Override // p4.e
    public Long b(String str) {
        r3.x l10 = r3.x.l("SELECT long_value FROM Preference where `key`=?", 1);
        if (str == null) {
            l10.P1(1);
        } else {
            l10.h1(1, str);
        }
        this.f44970a.d();
        Long l11 = null;
        Cursor b10 = t3.b.b(this.f44970a, l10, false, null);
        try {
            if (b10.moveToFirst() && !b10.isNull(0)) {
                l11 = Long.valueOf(b10.getLong(0));
            }
            return l11;
        } finally {
            b10.close();
            l10.B();
        }
    }
}
