package p4;

import android.database.Cursor;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import p4.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class k implements j {

    /* renamed from: a  reason: collision with root package name */
    private final r3.u f43661a;

    /* renamed from: b  reason: collision with root package name */
    private final r3.i f43662b;

    /* renamed from: c  reason: collision with root package name */
    private final r3.a0 f43663c;

    /* renamed from: d  reason: collision with root package name */
    private final r3.a0 f43664d;

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
            String str = iVar.f43658a;
            if (str == null) {
                kVar.O1(1);
            } else {
                kVar.g1(1, str);
            }
            kVar.v1(2, iVar.a());
            kVar.v1(3, iVar.f43660c);
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
        this.f43661a = uVar;
        this.f43662b = new a(uVar);
        this.f43663c = new b(uVar);
        this.f43664d = new c(uVar);
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
        r3.x k10 = r3.x.k("SELECT * FROM SystemIdInfo WHERE work_spec_id=? AND generation=?", 2);
        if (str == null) {
            k10.O1(1);
        } else {
            k10.g1(1, str);
        }
        k10.v1(2, i10);
        this.f43661a.d();
        i iVar = null;
        String string = null;
        Cursor b10 = t3.b.b(this.f43661a, k10, false, null);
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
            k10.p();
        }
    }

    @Override // p4.j
    public List c() {
        String string;
        r3.x k10 = r3.x.k("SELECT DISTINCT work_spec_id FROM SystemIdInfo", 0);
        this.f43661a.d();
        Cursor b10 = t3.b.b(this.f43661a, k10, false, null);
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

    @Override // p4.j
    public void d(m mVar) {
        j.a.b(this, mVar);
    }

    @Override // p4.j
    public void e(i iVar) {
        this.f43661a.d();
        this.f43661a.e();
        try {
            this.f43662b.j(iVar);
            this.f43661a.A();
        } finally {
            this.f43661a.i();
        }
    }

    @Override // p4.j
    public void f(String str, int i10) {
        this.f43661a.d();
        x3.k b10 = this.f43663c.b();
        if (str == null) {
            b10.O1(1);
        } else {
            b10.g1(1, str);
        }
        b10.v1(2, i10);
        this.f43661a.e();
        try {
            b10.U();
            this.f43661a.A();
        } finally {
            this.f43661a.i();
            this.f43663c.h(b10);
        }
    }

    @Override // p4.j
    public void h(String str) {
        this.f43661a.d();
        x3.k b10 = this.f43664d.b();
        if (str == null) {
            b10.O1(1);
        } else {
            b10.g1(1, str);
        }
        this.f43661a.e();
        try {
            b10.U();
            this.f43661a.A();
        } finally {
            this.f43661a.i();
            this.f43664d.h(b10);
        }
    }
}
