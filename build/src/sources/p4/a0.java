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
    private final r3.u f44955a;

    /* renamed from: b  reason: collision with root package name */
    private final r3.i f44956b;

    /* renamed from: c  reason: collision with root package name */
    private final r3.a0 f44957c;

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
                kVar.P1(1);
            } else {
                kVar.h1(1, yVar.a());
            }
            if (yVar.b() == null) {
                kVar.P1(2);
            } else {
                kVar.h1(2, yVar.b());
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
        this.f44955a = uVar;
        this.f44956b = new a(uVar);
        this.f44957c = new b(uVar);
    }

    public static List e() {
        return Collections.EMPTY_LIST;
    }

    @Override // p4.z
    public List a(String str) {
        String string;
        r3.x l10 = r3.x.l("SELECT DISTINCT tag FROM worktag WHERE work_spec_id=?", 1);
        if (str == null) {
            l10.P1(1);
        } else {
            l10.h1(1, str);
        }
        this.f44955a.d();
        Cursor b10 = t3.b.b(this.f44955a, l10, false, null);
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
            l10.B();
        }
    }

    @Override // p4.z
    public void b(y yVar) {
        this.f44955a.d();
        this.f44955a.e();
        try {
            this.f44956b.j(yVar);
            this.f44955a.A();
        } finally {
            this.f44955a.i();
        }
    }

    @Override // p4.z
    public void d(String str, Set set) {
        z.a.a(this, str, set);
    }
}
