package p4;

import android.database.Cursor;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Set;
import p4.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a0 implements z {

    /* renamed from: a  reason: collision with root package name */
    private final r3.u f42943a;

    /* renamed from: b  reason: collision with root package name */
    private final r3.i f42944b;

    /* renamed from: c  reason: collision with root package name */
    private final r3.a0 f42945c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a extends r3.i {
        a(r3.u uVar) {
            super(uVar);
        }

        @Override // r3.a0
        public String e() {
            return "INSERT OR IGNORE INTO `WorkTag` (`tag`,`work_spec_id`) VALUES (?,?)";
        }

        @Override // r3.i
        /* renamed from: k */
        public void i(x3.k kVar, y yVar) {
            if (yVar.a() == null) {
                kVar.N1(1);
            } else {
                kVar.d1(1, yVar.a());
            }
            if (yVar.b() == null) {
                kVar.N1(2);
            } else {
                kVar.d1(2, yVar.b());
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b extends r3.a0 {
        b(r3.u uVar) {
            super(uVar);
        }

        @Override // r3.a0
        public String e() {
            return "DELETE FROM worktag WHERE work_spec_id=?";
        }
    }

    public a0(r3.u uVar) {
        this.f42943a = uVar;
        this.f42944b = new a(uVar);
        this.f42945c = new b(uVar);
    }

    public static List e() {
        return Collections.EMPTY_LIST;
    }

    @Override // p4.z
    public List a(String str) {
        String string;
        r3.x k10 = r3.x.k("SELECT DISTINCT tag FROM worktag WHERE work_spec_id=?", 1);
        if (str == null) {
            k10.N1(1);
        } else {
            k10.d1(1, str);
        }
        this.f42943a.d();
        Cursor b10 = t3.b.b(this.f42943a, k10, false, null);
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
            k10.p();
        }
    }

    @Override // p4.z
    public void b(y yVar) {
        this.f42943a.d();
        this.f42943a.e();
        try {
            this.f42944b.j(yVar);
            this.f42943a.A();
        } finally {
            this.f42943a.i();
        }
    }

    @Override // p4.z
    public void d(String str, Set set) {
        z.a.a(this, str, set);
    }
}
