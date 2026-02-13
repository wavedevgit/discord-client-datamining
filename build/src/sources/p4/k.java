package p4;

import android.database.Cursor;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import p4.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class k implements j {

    /* renamed from: a  reason: collision with root package name */
    private final r3.u f41991a;

    /* renamed from: b  reason: collision with root package name */
    private final r3.i f41992b;

    /* renamed from: c  reason: collision with root package name */
    private final r3.a0 f41993c;

    /* renamed from: d  reason: collision with root package name */
    private final r3.a0 f41994d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a extends r3.i {
        a(r3.u uVar) {
            super(uVar);
        }

        @Override // r3.a0
        public String e() {
            return "INSERT OR REPLACE INTO `SystemIdInfo` (`work_spec_id`,`generation`,`system_id`) VALUES (?,?,?)";
        }

        @Override // r3.i
        /* renamed from: k */
        public void i(x3.k kVar, i iVar) {
            String str = iVar.f41988a;
            if (str == null) {
                kVar.S1(1);
            } else {
                kVar.i1(1, str);
            }
            kVar.v1(2, iVar.a());
            kVar.v1(3, iVar.f41990c);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b extends r3.a0 {
        b(r3.u uVar) {
            super(uVar);
        }

        @Override // r3.a0
        public String e() {
            return "DELETE FROM SystemIdInfo where work_spec_id=? AND generation=?";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class c extends r3.a0 {
        c(r3.u uVar) {
            super(uVar);
        }

        @Override // r3.a0
        public String e() {
            return "DELETE FROM SystemIdInfo where work_spec_id=?";
        }
    }

    public k(r3.u uVar) {
        this.f41991a = uVar;
        this.f41992b = new a(uVar);
        this.f41993c = new b(uVar);
        this.f41994d = new c(uVar);
    }

    public static List j() {
        return Collections.EMPTY_LIST;
    }

    @Override // p4.j
    public i a(m mVar) {
        return j.a.a(this, mVar);
    }

    @Override // p4.j
    public i b(String str, int i10) {
        r3.x i11 = r3.x.i("SELECT * FROM SystemIdInfo WHERE work_spec_id=? AND generation=?", 2);
        if (str == null) {
            i11.S1(1);
        } else {
            i11.i1(1, str);
        }
        i11.v1(2, i10);
        this.f41991a.d();
        i iVar = null;
        String string = null;
        Cursor b10 = t3.b.b(this.f41991a, i11, false, null);
        try {
            int e10 = t3.a.e(b10, "work_spec_id");
            int e11 = t3.a.e(b10, "generation");
            int e12 = t3.a.e(b10, "system_id");
            if (b10.moveToFirst()) {
                if (!b10.isNull(e10)) {
                    string = b10.getString(e10);
                }
                iVar = new i(string, b10.getInt(e11), b10.getInt(e12));
            }
            return iVar;
        } finally {
            b10.close();
            i11.p();
        }
    }

    @Override // p4.j
    public List c() {
        String string;
        r3.x i10 = r3.x.i("SELECT DISTINCT work_spec_id FROM SystemIdInfo", 0);
        this.f41991a.d();
        Cursor b10 = t3.b.b(this.f41991a, i10, false, null);
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

    @Override // p4.j
    public void d(m mVar) {
        j.a.b(this, mVar);
    }

    @Override // p4.j
    public void e(i iVar) {
        this.f41991a.d();
        this.f41991a.e();
        try {
            this.f41992b.j(iVar);
            this.f41991a.A();
        } finally {
            this.f41991a.i();
        }
    }

    @Override // p4.j
    public void f(String str, int i10) {
        this.f41991a.d();
        x3.k b10 = this.f41993c.b();
        if (str == null) {
            b10.S1(1);
        } else {
            b10.i1(1, str);
        }
        b10.v1(2, i10);
        this.f41991a.e();
        try {
            b10.V();
            this.f41991a.A();
        } finally {
            this.f41991a.i();
            this.f41993c.h(b10);
        }
    }

    @Override // p4.j
    public void h(String str) {
        this.f41991a.d();
        x3.k b10 = this.f41994d.b();
        if (str == null) {
            b10.S1(1);
        } else {
            b10.i1(1, str);
        }
        this.f41991a.e();
        try {
            b10.V();
            this.f41991a.A();
        } finally {
            this.f41991a.i();
            this.f41994d.h(b10);
        }
    }
}
