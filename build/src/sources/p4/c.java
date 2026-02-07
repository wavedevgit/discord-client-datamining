package p4;

import android.database.Cursor;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c implements b {

    /* renamed from: a  reason: collision with root package name */
    private final r3.u f43698a;

    /* renamed from: b  reason: collision with root package name */
    private final r3.i f43699b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a extends r3.i {
        a(r3.u uVar) {
            super(uVar);
        }

        @Override // r3.a0
        public String e() {
            return "INSERT OR IGNORE INTO `Dependency` (`work_spec_id`,`prerequisite_id`) VALUES (?,?)";
        }

        @Override // r3.i
        /* renamed from: k */
        public void i(x3.k kVar, p4.a aVar) {
            if (aVar.b() == null) {
                kVar.O1(1);
            } else {
                kVar.g1(1, aVar.b());
            }
            if (aVar.a() == null) {
                kVar.O1(2);
            } else {
                kVar.g1(2, aVar.a());
            }
        }
    }

    public c(r3.u uVar) {
        this.f43698a = uVar;
        this.f43699b = new a(uVar);
    }

    public static List e() {
        return Collections.EMPTY_LIST;
    }

    @Override // p4.b
    public List a(String str) {
        String string;
        r3.x k10 = r3.x.k("SELECT work_spec_id FROM dependency WHERE prerequisite_id=?", 1);
        if (str == null) {
            k10.O1(1);
        } else {
            k10.g1(1, str);
        }
        this.f43698a.d();
        Cursor b10 = t3.b.b(this.f43698a, k10, false, null);
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

    @Override // p4.b
    public boolean b(String str) {
        boolean z10 = true;
        r3.x k10 = r3.x.k("SELECT COUNT(*)=0 FROM dependency WHERE work_spec_id=? AND prerequisite_id IN (SELECT id FROM workspec WHERE state!=2)", 1);
        if (str == null) {
            k10.O1(1);
        } else {
            k10.g1(1, str);
        }
        this.f43698a.d();
        boolean z11 = false;
        Cursor b10 = t3.b.b(this.f43698a, k10, false, null);
        try {
            if (b10.moveToFirst()) {
                if (b10.getInt(0) == 0) {
                    z10 = false;
                }
                z11 = z10;
            }
            return z11;
        } finally {
            b10.close();
            k10.p();
        }
    }

    @Override // p4.b
    public void c(p4.a aVar) {
        this.f43698a.d();
        this.f43698a.e();
        try {
            this.f43699b.j(aVar);
            this.f43698a.A();
        } finally {
            this.f43698a.i();
        }
    }

    @Override // p4.b
    public boolean d(String str) {
        boolean z10 = true;
        r3.x k10 = r3.x.k("SELECT COUNT(*)>0 FROM dependency WHERE prerequisite_id=?", 1);
        if (str == null) {
            k10.O1(1);
        } else {
            k10.g1(1, str);
        }
        this.f43698a.d();
        boolean z11 = false;
        Cursor b10 = t3.b.b(this.f43698a, k10, false, null);
        try {
            if (b10.moveToFirst()) {
                if (b10.getInt(0) == 0) {
                    z10 = false;
                }
                z11 = z10;
            }
            return z11;
        } finally {
            b10.close();
            k10.p();
        }
    }
}
