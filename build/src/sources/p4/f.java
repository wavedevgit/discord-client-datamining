package p4;

import android.database.Cursor;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class f implements e {

    /* renamed from: a  reason: collision with root package name */
    private final r3.u f43703a;

    /* renamed from: b  reason: collision with root package name */
    private final r3.i f43704b;

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
                kVar.O1(1);
            } else {
                kVar.g1(1, dVar.a());
            }
            if (dVar.b() == null) {
                kVar.O1(2);
            } else {
                kVar.v1(2, dVar.b().longValue());
            }
        }
    }

    public f(r3.u uVar) {
        this.f43703a = uVar;
        this.f43704b = new a(uVar);
    }

    public static List c() {
        return Collections.EMPTY_LIST;
    }

    @Override // p4.e
    public void a(d dVar) {
        this.f43703a.d();
        this.f43703a.e();
        try {
            this.f43704b.j(dVar);
            this.f43703a.A();
        } finally {
            this.f43703a.i();
        }
    }

    @Override // p4.e
    public Long b(String str) {
        r3.x k10 = r3.x.k("SELECT long_value FROM Preference where `key`=?", 1);
        if (str == null) {
            k10.O1(1);
        } else {
            k10.g1(1, str);
        }
        this.f43703a.d();
        Long l10 = null;
        Cursor b10 = t3.b.b(this.f43703a, k10, false, null);
        try {
            if (b10.moveToFirst() && !b10.isNull(0)) {
                l10 = Long.valueOf(b10.getLong(0));
            }
            return l10;
        } finally {
            b10.close();
            k10.p();
        }
    }
}
