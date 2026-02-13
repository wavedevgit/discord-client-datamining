package p4;

import android.database.Cursor;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class f implements e {

    /* renamed from: a  reason: collision with root package name */
    private final r3.u f41985a;

    /* renamed from: b  reason: collision with root package name */
    private final r3.i f41986b;

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
                kVar.S1(1);
            } else {
                kVar.i1(1, dVar.a());
            }
            if (dVar.b() == null) {
                kVar.S1(2);
            } else {
                kVar.v1(2, dVar.b().longValue());
            }
        }
    }

    public f(r3.u uVar) {
        this.f41985a = uVar;
        this.f41986b = new a(uVar);
    }

    public static List c() {
        return Collections.EMPTY_LIST;
    }

    @Override // p4.e
    public void a(d dVar) {
        this.f41985a.d();
        this.f41985a.e();
        try {
            this.f41986b.j(dVar);
            this.f41985a.A();
        } finally {
            this.f41985a.i();
        }
    }

    @Override // p4.e
    public Long b(String str) {
        r3.x i10 = r3.x.i("SELECT long_value FROM Preference where `key`=?", 1);
        if (str == null) {
            i10.S1(1);
        } else {
            i10.i1(1, str);
        }
        this.f41985a.d();
        Long l10 = null;
        Cursor b10 = t3.b.b(this.f41985a, i10, false, null);
        try {
            if (b10.moveToFirst() && !b10.isNull(0)) {
                l10 = Long.valueOf(b10.getLong(0));
            }
            return l10;
        } finally {
            b10.close();
            i10.p();
        }
    }
}
