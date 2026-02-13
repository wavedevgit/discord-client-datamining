package p4;

import android.database.Cursor;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class p implements o {

    /* renamed from: a  reason: collision with root package name */
    private final r3.u f42002a;

    /* renamed from: b  reason: collision with root package name */
    private final r3.i f42003b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a extends r3.i {
        a(r3.u uVar) {
            super(uVar);
        }

        @Override // r3.a0
        public String e() {
            return "INSERT OR IGNORE INTO `WorkName` (`name`,`work_spec_id`) VALUES (?,?)";
        }

        @Override // r3.i
        /* renamed from: k */
        public void i(x3.k kVar, n nVar) {
            if (nVar.a() == null) {
                kVar.S1(1);
            } else {
                kVar.i1(1, nVar.a());
            }
            if (nVar.b() == null) {
                kVar.S1(2);
            } else {
                kVar.i1(2, nVar.b());
            }
        }
    }

    public p(r3.u uVar) {
        this.f42002a = uVar;
        this.f42003b = new a(uVar);
    }

    public static List c() {
        return Collections.EMPTY_LIST;
    }

    @Override // p4.o
    public List a(String str) {
        String string;
        r3.x i10 = r3.x.i("SELECT name FROM workname WHERE work_spec_id=?", 1);
        if (str == null) {
            i10.S1(1);
        } else {
            i10.i1(1, str);
        }
        this.f42002a.d();
        Cursor b10 = t3.b.b(this.f42002a, i10, false, null);
        try {
            ArrayList arrayList = new ArrayList(b10.getCount());
            while (b10.moveToNext()) {
                if (b10.isNull(0)) {
                    string = null;
                } else {
                    string = b10.getString(0);
                }
                arrayList.add(string);
            }
            return arrayList;
        } finally {
            b10.close();
            i10.p();
        }
    }

    @Override // p4.o
    public void b(n nVar) {
        this.f42002a.d();
        this.f42002a.e();
        try {
            this.f42003b.j(nVar);
            this.f42002a.A();
        } finally {
            this.f42002a.i();
        }
    }
}
