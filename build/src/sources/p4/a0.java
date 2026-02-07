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
    private final r3.u f43688a;

    /* renamed from: b  reason: collision with root package name */
    private final r3.i f43689b;

    /* renamed from: c  reason: collision with root package name */
    private final r3.a0 f43690c;

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
                kVar.O1(1);
            } else {
                kVar.g1(1, yVar.a());
            }
            if (yVar.b() == null) {
                kVar.O1(2);
            } else {
                kVar.g1(2, yVar.b());
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
        this.f43688a = uVar;
        this.f43689b = new a(uVar);
        this.f43690c = new b(uVar);
    }

    public static List e() {
        return Collections.EMPTY_LIST;
    }

    @Override // p4.z
    public List a(String str) {
        String string;
        r3.x k10 = r3.x.k("SELECT DISTINCT tag FROM worktag WHERE work_spec_id=?", 1);
        if (str == null) {
            k10.O1(1);
        } else {
            k10.g1(1, str);
        }
        this.f43688a.d();
        Cursor b10 = t3.b.b(this.f43688a, k10, false, null);
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
        this.f43688a.d();
        this.f43688a.e();
        try {
            this.f43689b.j(yVar);
            this.f43688a.A();
        } finally {
            this.f43688a.i();
        }
    }

    @Override // p4.z
    public void d(String str, Set set) {
        z.a.a(this, str, set);
    }
}
