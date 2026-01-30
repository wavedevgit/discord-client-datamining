package p4;

import android.database.Cursor;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import p4.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class k implements j {

    /* renamed from: a  reason: collision with root package name */
    private final r3.u f44902a;

    /* renamed from: b  reason: collision with root package name */
    private final r3.i f44903b;

    /* renamed from: c  reason: collision with root package name */
    private final r3.a0 f44904c;

    /* renamed from: d  reason: collision with root package name */
    private final r3.a0 f44905d;

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
            String str = iVar.f44899a;
            if (str == null) {
                kVar.P1(1);
            } else {
                kVar.g1(1, str);
            }
            kVar.w1(2, iVar.a());
            kVar.w1(3, iVar.f44901c);
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
        this.f44902a = uVar;
        this.f44903b = new a(uVar);
        this.f44904c = new b(uVar);
        this.f44905d = new c(uVar);
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
        r3.x l10 = r3.x.l("SELECT * FROM SystemIdInfo WHERE work_spec_id=? AND generation=?", 2);
        if (str == null) {
            l10.P1(1);
        } else {
            l10.g1(1, str);
        }
        l10.w1(2, i10);
        this.f44902a.d();
        i iVar = null;
        String string = null;
        Cursor b10 = t3.b.b(this.f44902a, l10, false, null);
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
            l10.B();
        }
    }

    @Override // p4.j
    public List c() {
        String string;
        r3.x l10 = r3.x.l("SELECT DISTINCT work_spec_id FROM SystemIdInfo", 0);
        this.f44902a.d();
        Cursor b10 = t3.b.b(this.f44902a, l10, false, null);
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

    @Override // p4.j
    public void d(m mVar) {
        j.a.b(this, mVar);
    }

    @Override // p4.j
    public void e(i iVar) {
        this.f44902a.d();
        this.f44902a.e();
        try {
            this.f44903b.j(iVar);
            this.f44902a.A();
        } finally {
            this.f44902a.i();
        }
    }

    @Override // p4.j
    public void f(String str, int i10) {
        this.f44902a.d();
        x3.k b10 = this.f44904c.b();
        if (str == null) {
            b10.P1(1);
        } else {
            b10.g1(1, str);
        }
        b10.w1(2, i10);
        this.f44902a.e();
        try {
            b10.R();
            this.f44902a.A();
        } finally {
            this.f44902a.i();
            this.f44904c.h(b10);
        }
    }

    @Override // p4.j
    public void h(String str) {
        this.f44902a.d();
        x3.k b10 = this.f44905d.b();
        if (str == null) {
            b10.P1(1);
        } else {
            b10.g1(1, str);
        }
        this.f44902a.e();
        try {
            b10.R();
            this.f44902a.A();
        } finally {
            this.f44902a.i();
            this.f44905d.h(b10);
        }
    }
}
