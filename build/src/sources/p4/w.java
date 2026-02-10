package p4;

import android.database.Cursor;
import com.facebook.react.devsupport.StackTraceHelper;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import p4.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class w implements v {

    /* renamed from: a  reason: collision with root package name */
    private final r3.u f41471a;

    /* renamed from: b  reason: collision with root package name */
    private final r3.i f41472b;

    /* renamed from: c  reason: collision with root package name */
    private final r3.h f41473c;

    /* renamed from: d  reason: collision with root package name */
    private final r3.a0 f41474d;

    /* renamed from: e  reason: collision with root package name */
    private final r3.a0 f41475e;

    /* renamed from: f  reason: collision with root package name */
    private final r3.a0 f41476f;

    /* renamed from: g  reason: collision with root package name */
    private final r3.a0 f41477g;

    /* renamed from: h  reason: collision with root package name */
    private final r3.a0 f41478h;

    /* renamed from: i  reason: collision with root package name */
    private final r3.a0 f41479i;

    /* renamed from: j  reason: collision with root package name */
    private final r3.a0 f41480j;

    /* renamed from: k  reason: collision with root package name */
    private final r3.a0 f41481k;

    /* renamed from: l  reason: collision with root package name */
    private final r3.a0 f41482l;

    /* renamed from: m  reason: collision with root package name */
    private final r3.a0 f41483m;

    /* renamed from: n  reason: collision with root package name */
    private final r3.a0 f41484n;

    /* renamed from: o  reason: collision with root package name */
    private final r3.a0 f41485o;

    /* renamed from: p  reason: collision with root package name */
    private final r3.a0 f41486p;

    /* renamed from: q  reason: collision with root package name */
    private final r3.a0 f41487q;

    /* renamed from: r  reason: collision with root package name */
    private final r3.a0 f41488r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a extends r3.a0 {
        a(r3.u uVar) {
            super(uVar);
        }

        @Override // r3.a0
        public String e() {
            return "UPDATE workspec SET run_attempt_count=0 WHERE id=?";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b extends r3.a0 {
        b(r3.u uVar) {
            super(uVar);
        }

        @Override // r3.a0
        public String e() {
            return "UPDATE workspec SET next_schedule_time_override=? WHERE id=?";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class c extends r3.a0 {
        c(r3.u uVar) {
            super(uVar);
        }

        @Override // r3.a0
        public String e() {
            return "UPDATE workspec SET next_schedule_time_override=9223372036854775807 WHERE (id=? AND next_schedule_time_override_generation=?)";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class d extends r3.a0 {
        d(r3.u uVar) {
            super(uVar);
        }

        @Override // r3.a0
        public String e() {
            return "UPDATE workspec SET schedule_requested_at=? WHERE id=?";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class e extends r3.a0 {
        e(r3.u uVar) {
            super(uVar);
        }

        @Override // r3.a0
        public String e() {
            return "UPDATE workspec SET schedule_requested_at=-1 WHERE state NOT IN (2, 3, 5)";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class f extends r3.a0 {
        f(r3.u uVar) {
            super(uVar);
        }

        @Override // r3.a0
        public String e() {
            return "DELETE FROM workspec WHERE state IN (2, 3, 5) AND (SELECT COUNT(*)=0 FROM dependency WHERE     prerequisite_id=id AND     work_spec_id NOT IN         (SELECT id FROM workspec WHERE state IN (2, 3, 5)))";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class g extends r3.a0 {
        g(r3.u uVar) {
            super(uVar);
        }

        @Override // r3.a0
        public String e() {
            return "UPDATE workspec SET generation=generation+1 WHERE id=?";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class h extends r3.a0 {
        h(r3.u uVar) {
            super(uVar);
        }

        @Override // r3.a0
        public String e() {
            return "UPDATE workspec SET stop_reason=? WHERE id=?";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class i extends r3.i {
        i(r3.u uVar) {
            super(uVar);
        }

        @Override // r3.a0
        public String e() {
            return "INSERT OR IGNORE INTO `WorkSpec` (`id`,`state`,`worker_class_name`,`input_merger_class_name`,`input`,`output`,`initial_delay`,`interval_duration`,`flex_duration`,`run_attempt_count`,`backoff_policy`,`backoff_delay_duration`,`last_enqueue_time`,`minimum_retention_duration`,`schedule_requested_at`,`run_in_foreground`,`out_of_quota_policy`,`period_count`,`generation`,`next_schedule_time_override`,`next_schedule_time_override_generation`,`stop_reason`,`required_network_type`,`requires_charging`,`requires_device_idle`,`requires_battery_not_low`,`requires_storage_not_low`,`trigger_content_update_delay`,`trigger_max_content_delay`,`content_uri_triggers`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        }

        @Override // r3.i
        /* renamed from: k */
        public void i(x3.k kVar, u uVar) {
            String str = uVar.f41446a;
            if (str == null) {
                kVar.S1(1);
            } else {
                kVar.i1(1, str);
            }
            b0 b0Var = b0.f41406a;
            kVar.v1(2, b0.j(uVar.f41447b));
            String str2 = uVar.f41448c;
            if (str2 == null) {
                kVar.S1(3);
            } else {
                kVar.i1(3, str2);
            }
            String str3 = uVar.f41449d;
            if (str3 == null) {
                kVar.S1(4);
            } else {
                kVar.i1(4, str3);
            }
            byte[] o10 = androidx.work.b.o(uVar.f41450e);
            if (o10 == null) {
                kVar.S1(5);
            } else {
                kVar.D1(5, o10);
            }
            byte[] o11 = androidx.work.b.o(uVar.f41451f);
            if (o11 == null) {
                kVar.S1(6);
            } else {
                kVar.D1(6, o11);
            }
            kVar.v1(7, uVar.f41452g);
            kVar.v1(8, uVar.f41453h);
            kVar.v1(9, uVar.f41454i);
            kVar.v1(10, uVar.f41456k);
            kVar.v1(11, b0.a(uVar.f41457l));
            kVar.v1(12, uVar.f41458m);
            kVar.v1(13, uVar.f41459n);
            kVar.v1(14, uVar.f41460o);
            kVar.v1(15, uVar.f41461p);
            kVar.v1(16, uVar.f41462q ? 1L : 0L);
            kVar.v1(17, b0.h(uVar.f41463r));
            kVar.v1(18, uVar.i());
            kVar.v1(19, uVar.f());
            kVar.v1(20, uVar.g());
            kVar.v1(21, uVar.h());
            kVar.v1(22, uVar.j());
            k4.d dVar = uVar.f41455j;
            if (dVar != null) {
                kVar.v1(23, b0.g(dVar.d()));
                kVar.v1(24, dVar.g() ? 1L : 0L);
                kVar.v1(25, dVar.h() ? 1L : 0L);
                kVar.v1(26, dVar.f() ? 1L : 0L);
                kVar.v1(27, dVar.i() ? 1L : 0L);
                kVar.v1(28, dVar.b());
                kVar.v1(29, dVar.a());
                byte[] i10 = b0.i(dVar.c());
                if (i10 == null) {
                    kVar.S1(30);
                    return;
                } else {
                    kVar.D1(30, i10);
                    return;
                }
            }
            kVar.S1(23);
            kVar.S1(24);
            kVar.S1(25);
            kVar.S1(26);
            kVar.S1(27);
            kVar.S1(28);
            kVar.S1(29);
            kVar.S1(30);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class j extends r3.h {
        j(r3.u uVar) {
            super(uVar);
        }

        @Override // r3.a0
        public String e() {
            return "UPDATE OR ABORT `WorkSpec` SET `id` = ?,`state` = ?,`worker_class_name` = ?,`input_merger_class_name` = ?,`input` = ?,`output` = ?,`initial_delay` = ?,`interval_duration` = ?,`flex_duration` = ?,`run_attempt_count` = ?,`backoff_policy` = ?,`backoff_delay_duration` = ?,`last_enqueue_time` = ?,`minimum_retention_duration` = ?,`schedule_requested_at` = ?,`run_in_foreground` = ?,`out_of_quota_policy` = ?,`period_count` = ?,`generation` = ?,`next_schedule_time_override` = ?,`next_schedule_time_override_generation` = ?,`stop_reason` = ?,`required_network_type` = ?,`requires_charging` = ?,`requires_device_idle` = ?,`requires_battery_not_low` = ?,`requires_storage_not_low` = ?,`trigger_content_update_delay` = ?,`trigger_max_content_delay` = ?,`content_uri_triggers` = ? WHERE `id` = ?";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class k extends r3.a0 {
        k(r3.u uVar) {
            super(uVar);
        }

        @Override // r3.a0
        public String e() {
            return "DELETE FROM workspec WHERE id=?";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class l extends r3.a0 {
        l(r3.u uVar) {
            super(uVar);
        }

        @Override // r3.a0
        public String e() {
            return "UPDATE workspec SET state=? WHERE id=?";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class m extends r3.a0 {
        m(r3.u uVar) {
            super(uVar);
        }

        @Override // r3.a0
        public String e() {
            return "UPDATE workspec SET stop_reason = CASE WHEN state=1 THEN 1 ELSE -256 END, state=5 WHERE id=?";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class n extends r3.a0 {
        n(r3.u uVar) {
            super(uVar);
        }

        @Override // r3.a0
        public String e() {
            return "UPDATE workspec SET period_count=period_count+1 WHERE id=?";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class o extends r3.a0 {
        o(r3.u uVar) {
            super(uVar);
        }

        @Override // r3.a0
        public String e() {
            return "UPDATE workspec SET output=? WHERE id=?";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class p extends r3.a0 {
        p(r3.u uVar) {
            super(uVar);
        }

        @Override // r3.a0
        public String e() {
            return "UPDATE workspec SET last_enqueue_time=? WHERE id=?";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class q extends r3.a0 {
        q(r3.u uVar) {
            super(uVar);
        }

        @Override // r3.a0
        public String e() {
            return "UPDATE workspec SET run_attempt_count=run_attempt_count+1 WHERE id=?";
        }
    }

    public w(r3.u uVar) {
        this.f41471a = uVar;
        this.f41472b = new i(uVar);
        this.f41473c = new j(uVar);
        this.f41474d = new k(uVar);
        this.f41475e = new l(uVar);
        this.f41476f = new m(uVar);
        this.f41477g = new n(uVar);
        this.f41478h = new o(uVar);
        this.f41479i = new p(uVar);
        this.f41480j = new q(uVar);
        this.f41481k = new a(uVar);
        this.f41482l = new b(uVar);
        this.f41483m = new c(uVar);
        this.f41484n = new d(uVar);
        this.f41485o = new e(uVar);
        this.f41486p = new f(uVar);
        this.f41487q = new g(uVar);
        this.f41488r = new h(uVar);
    }

    public static List A() {
        return Collections.EMPTY_LIST;
    }

    @Override // p4.v
    public void a(String str) {
        this.f41471a.d();
        x3.k b10 = this.f41474d.b();
        if (str == null) {
            b10.S1(1);
        } else {
            b10.i1(1, str);
        }
        this.f41471a.e();
        try {
            b10.V();
            this.f41471a.A();
        } finally {
            this.f41471a.i();
            this.f41474d.h(b10);
        }
    }

    @Override // p4.v
    public void b(String str) {
        this.f41471a.d();
        x3.k b10 = this.f41477g.b();
        if (str == null) {
            b10.S1(1);
        } else {
            b10.i1(1, str);
        }
        this.f41471a.e();
        try {
            b10.V();
            this.f41471a.A();
        } finally {
            this.f41471a.i();
            this.f41477g.h(b10);
        }
    }

    @Override // p4.v
    public List c(long j10) {
        r3.x xVar;
        String string;
        String string2;
        String string3;
        byte[] blob;
        byte[] blob2;
        boolean z10;
        boolean z11;
        boolean z12;
        boolean z13;
        boolean z14;
        byte[] blob3;
        r3.x i10 = r3.x.i("SELECT * FROM workspec WHERE last_enqueue_time >= ? AND state IN (2, 3, 5) ORDER BY last_enqueue_time DESC", 1);
        i10.v1(1, j10);
        this.f41471a.d();
        Cursor b10 = t3.b.b(this.f41471a, i10, false, null);
        try {
            int e10 = t3.a.e(b10, StackTraceHelper.ID_KEY);
            int e11 = t3.a.e(b10, "state");
            int e12 = t3.a.e(b10, "worker_class_name");
            int e13 = t3.a.e(b10, "input_merger_class_name");
            int e14 = t3.a.e(b10, "input");
            int e15 = t3.a.e(b10, "output");
            int e16 = t3.a.e(b10, "initial_delay");
            int e17 = t3.a.e(b10, "interval_duration");
            int e18 = t3.a.e(b10, "flex_duration");
            int e19 = t3.a.e(b10, "run_attempt_count");
            int e20 = t3.a.e(b10, "backoff_policy");
            int e21 = t3.a.e(b10, "backoff_delay_duration");
            int e22 = t3.a.e(b10, "last_enqueue_time");
            int e23 = t3.a.e(b10, "minimum_retention_duration");
            xVar = i10;
            try {
                int e24 = t3.a.e(b10, "schedule_requested_at");
                int e25 = t3.a.e(b10, "run_in_foreground");
                int e26 = t3.a.e(b10, "out_of_quota_policy");
                int e27 = t3.a.e(b10, "period_count");
                int e28 = t3.a.e(b10, "generation");
                int e29 = t3.a.e(b10, "next_schedule_time_override");
                int e30 = t3.a.e(b10, "next_schedule_time_override_generation");
                int e31 = t3.a.e(b10, "stop_reason");
                int e32 = t3.a.e(b10, "required_network_type");
                int e33 = t3.a.e(b10, "requires_charging");
                int e34 = t3.a.e(b10, "requires_device_idle");
                int e35 = t3.a.e(b10, "requires_battery_not_low");
                int e36 = t3.a.e(b10, "requires_storage_not_low");
                int e37 = t3.a.e(b10, "trigger_content_update_delay");
                int e38 = t3.a.e(b10, "trigger_max_content_delay");
                int e39 = t3.a.e(b10, "content_uri_triggers");
                int i11 = e23;
                ArrayList arrayList = new ArrayList(b10.getCount());
                while (b10.moveToNext()) {
                    if (b10.isNull(e10)) {
                        string = null;
                    } else {
                        string = b10.getString(e10);
                    }
                    k4.x f10 = b0.f(b10.getInt(e11));
                    if (b10.isNull(e12)) {
                        string2 = null;
                    } else {
                        string2 = b10.getString(e12);
                    }
                    if (b10.isNull(e13)) {
                        string3 = null;
                    } else {
                        string3 = b10.getString(e13);
                    }
                    if (b10.isNull(e14)) {
                        blob = null;
                    } else {
                        blob = b10.getBlob(e14);
                    }
                    androidx.work.b g10 = androidx.work.b.g(blob);
                    if (b10.isNull(e15)) {
                        blob2 = null;
                    } else {
                        blob2 = b10.getBlob(e15);
                    }
                    androidx.work.b g11 = androidx.work.b.g(blob2);
                    long j11 = b10.getLong(e16);
                    long j12 = b10.getLong(e17);
                    long j13 = b10.getLong(e18);
                    int i12 = b10.getInt(e19);
                    k4.a c10 = b0.c(b10.getInt(e20));
                    long j14 = b10.getLong(e21);
                    long j15 = b10.getLong(e22);
                    int i13 = i11;
                    long j16 = b10.getLong(i13);
                    int i14 = e10;
                    int i15 = e24;
                    long j17 = b10.getLong(i15);
                    e24 = i15;
                    int i16 = e25;
                    if (b10.getInt(i16) != 0) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    e25 = i16;
                    int i17 = e26;
                    k4.r e40 = b0.e(b10.getInt(i17));
                    e26 = i17;
                    int i18 = e27;
                    int i19 = b10.getInt(i18);
                    e27 = i18;
                    int i20 = e28;
                    int i21 = b10.getInt(i20);
                    e28 = i20;
                    int i22 = e29;
                    long j18 = b10.getLong(i22);
                    e29 = i22;
                    int i23 = e30;
                    int i24 = b10.getInt(i23);
                    e30 = i23;
                    int i25 = e31;
                    int i26 = b10.getInt(i25);
                    e31 = i25;
                    int i27 = e32;
                    k4.n d10 = b0.d(b10.getInt(i27));
                    e32 = i27;
                    int i28 = e33;
                    if (b10.getInt(i28) != 0) {
                        z11 = true;
                    } else {
                        z11 = false;
                    }
                    e33 = i28;
                    int i29 = e34;
                    if (b10.getInt(i29) != 0) {
                        z12 = true;
                    } else {
                        z12 = false;
                    }
                    e34 = i29;
                    int i30 = e35;
                    if (b10.getInt(i30) != 0) {
                        z13 = true;
                    } else {
                        z13 = false;
                    }
                    e35 = i30;
                    int i31 = e36;
                    if (b10.getInt(i31) != 0) {
                        z14 = true;
                    } else {
                        z14 = false;
                    }
                    e36 = i31;
                    int i32 = e37;
                    long j19 = b10.getLong(i32);
                    e37 = i32;
                    int i33 = e38;
                    long j20 = b10.getLong(i33);
                    e38 = i33;
                    int i34 = e39;
                    if (b10.isNull(i34)) {
                        blob3 = null;
                    } else {
                        blob3 = b10.getBlob(i34);
                    }
                    e39 = i34;
                    arrayList.add(new u(string, f10, string2, string3, g10, g11, j11, j12, j13, new k4.d(d10, z11, z12, z13, z14, j19, j20, b0.b(blob3)), i12, c10, j14, j15, j16, j17, z10, e40, i19, i21, j18, i24, i26));
                    e10 = i14;
                    i11 = i13;
                }
                b10.close();
                xVar.p();
                return arrayList;
            } catch (Throwable th2) {
                th = th2;
                b10.close();
                xVar.p();
                throw th;
            }
        } catch (Throwable th3) {
            th = th3;
            xVar = i10;
        }
    }

    @Override // p4.v
    public int d(k4.x xVar, String str) {
        this.f41471a.d();
        x3.k b10 = this.f41475e.b();
        b10.v1(1, b0.j(xVar));
        if (str == null) {
            b10.S1(2);
        } else {
            b10.i1(2, str);
        }
        this.f41471a.e();
        try {
            int V = b10.V();
            this.f41471a.A();
            return V;
        } finally {
            this.f41471a.i();
            this.f41475e.h(b10);
        }
    }

    @Override // p4.v
    public void e(String str, int i10) {
        this.f41471a.d();
        x3.k b10 = this.f41488r.b();
        b10.v1(1, i10);
        if (str == null) {
            b10.S1(2);
        } else {
            b10.i1(2, str);
        }
        this.f41471a.e();
        try {
            b10.V();
            this.f41471a.A();
        } finally {
            this.f41471a.i();
            this.f41488r.h(b10);
        }
    }

    @Override // p4.v
    public List f() {
        r3.x xVar;
        String string;
        String string2;
        String string3;
        byte[] blob;
        byte[] blob2;
        boolean z10;
        boolean z11;
        boolean z12;
        boolean z13;
        boolean z14;
        byte[] blob3;
        r3.x i10 = r3.x.i("SELECT * FROM workspec WHERE state=0 AND schedule_requested_at<>-1", 0);
        this.f41471a.d();
        Cursor b10 = t3.b.b(this.f41471a, i10, false, null);
        try {
            int e10 = t3.a.e(b10, StackTraceHelper.ID_KEY);
            int e11 = t3.a.e(b10, "state");
            int e12 = t3.a.e(b10, "worker_class_name");
            int e13 = t3.a.e(b10, "input_merger_class_name");
            int e14 = t3.a.e(b10, "input");
            int e15 = t3.a.e(b10, "output");
            int e16 = t3.a.e(b10, "initial_delay");
            int e17 = t3.a.e(b10, "interval_duration");
            int e18 = t3.a.e(b10, "flex_duration");
            int e19 = t3.a.e(b10, "run_attempt_count");
            int e20 = t3.a.e(b10, "backoff_policy");
            int e21 = t3.a.e(b10, "backoff_delay_duration");
            int e22 = t3.a.e(b10, "last_enqueue_time");
            int e23 = t3.a.e(b10, "minimum_retention_duration");
            xVar = i10;
            try {
                int e24 = t3.a.e(b10, "schedule_requested_at");
                int e25 = t3.a.e(b10, "run_in_foreground");
                int e26 = t3.a.e(b10, "out_of_quota_policy");
                int e27 = t3.a.e(b10, "period_count");
                int e28 = t3.a.e(b10, "generation");
                int e29 = t3.a.e(b10, "next_schedule_time_override");
                int e30 = t3.a.e(b10, "next_schedule_time_override_generation");
                int e31 = t3.a.e(b10, "stop_reason");
                int e32 = t3.a.e(b10, "required_network_type");
                int e33 = t3.a.e(b10, "requires_charging");
                int e34 = t3.a.e(b10, "requires_device_idle");
                int e35 = t3.a.e(b10, "requires_battery_not_low");
                int e36 = t3.a.e(b10, "requires_storage_not_low");
                int e37 = t3.a.e(b10, "trigger_content_update_delay");
                int e38 = t3.a.e(b10, "trigger_max_content_delay");
                int e39 = t3.a.e(b10, "content_uri_triggers");
                int i11 = e23;
                ArrayList arrayList = new ArrayList(b10.getCount());
                while (b10.moveToNext()) {
                    if (b10.isNull(e10)) {
                        string = null;
                    } else {
                        string = b10.getString(e10);
                    }
                    k4.x f10 = b0.f(b10.getInt(e11));
                    if (b10.isNull(e12)) {
                        string2 = null;
                    } else {
                        string2 = b10.getString(e12);
                    }
                    if (b10.isNull(e13)) {
                        string3 = null;
                    } else {
                        string3 = b10.getString(e13);
                    }
                    if (b10.isNull(e14)) {
                        blob = null;
                    } else {
                        blob = b10.getBlob(e14);
                    }
                    androidx.work.b g10 = androidx.work.b.g(blob);
                    if (b10.isNull(e15)) {
                        blob2 = null;
                    } else {
                        blob2 = b10.getBlob(e15);
                    }
                    androidx.work.b g11 = androidx.work.b.g(blob2);
                    long j10 = b10.getLong(e16);
                    long j11 = b10.getLong(e17);
                    long j12 = b10.getLong(e18);
                    int i12 = b10.getInt(e19);
                    k4.a c10 = b0.c(b10.getInt(e20));
                    long j13 = b10.getLong(e21);
                    long j14 = b10.getLong(e22);
                    int i13 = i11;
                    long j15 = b10.getLong(i13);
                    int i14 = e10;
                    int i15 = e24;
                    long j16 = b10.getLong(i15);
                    e24 = i15;
                    int i16 = e25;
                    if (b10.getInt(i16) != 0) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    e25 = i16;
                    int i17 = e26;
                    k4.r e40 = b0.e(b10.getInt(i17));
                    e26 = i17;
                    int i18 = e27;
                    int i19 = b10.getInt(i18);
                    e27 = i18;
                    int i20 = e28;
                    int i21 = b10.getInt(i20);
                    e28 = i20;
                    int i22 = e29;
                    long j17 = b10.getLong(i22);
                    e29 = i22;
                    int i23 = e30;
                    int i24 = b10.getInt(i23);
                    e30 = i23;
                    int i25 = e31;
                    int i26 = b10.getInt(i25);
                    e31 = i25;
                    int i27 = e32;
                    k4.n d10 = b0.d(b10.getInt(i27));
                    e32 = i27;
                    int i28 = e33;
                    if (b10.getInt(i28) != 0) {
                        z11 = true;
                    } else {
                        z11 = false;
                    }
                    e33 = i28;
                    int i29 = e34;
                    if (b10.getInt(i29) != 0) {
                        z12 = true;
                    } else {
                        z12 = false;
                    }
                    e34 = i29;
                    int i30 = e35;
                    if (b10.getInt(i30) != 0) {
                        z13 = true;
                    } else {
                        z13 = false;
                    }
                    e35 = i30;
                    int i31 = e36;
                    if (b10.getInt(i31) != 0) {
                        z14 = true;
                    } else {
                        z14 = false;
                    }
                    e36 = i31;
                    int i32 = e37;
                    long j18 = b10.getLong(i32);
                    e37 = i32;
                    int i33 = e38;
                    long j19 = b10.getLong(i33);
                    e38 = i33;
                    int i34 = e39;
                    if (b10.isNull(i34)) {
                        blob3 = null;
                    } else {
                        blob3 = b10.getBlob(i34);
                    }
                    e39 = i34;
                    arrayList.add(new u(string, f10, string2, string3, g10, g11, j10, j11, j12, new k4.d(d10, z11, z12, z13, z14, j18, j19, b0.b(blob3)), i12, c10, j13, j14, j15, j16, z10, e40, i19, i21, j17, i24, i26));
                    e10 = i14;
                    i11 = i13;
                }
                b10.close();
                xVar.p();
                return arrayList;
            } catch (Throwable th2) {
                th = th2;
                b10.close();
                xVar.p();
                throw th;
            }
        } catch (Throwable th3) {
            th = th3;
            xVar = i10;
        }
    }

    @Override // p4.v
    public List g(String str) {
        String string;
        r3.x i10 = r3.x.i("SELECT id FROM workspec WHERE state NOT IN (2, 3, 5) AND id IN (SELECT work_spec_id FROM workname WHERE name=?)", 1);
        if (str == null) {
            i10.S1(1);
        } else {
            i10.i1(1, str);
        }
        this.f41471a.d();
        Cursor b10 = t3.b.b(this.f41471a, i10, false, null);
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

    @Override // p4.v
    public k4.x h(String str) {
        Integer valueOf;
        r3.x i10 = r3.x.i("SELECT state FROM workspec WHERE id=?", 1);
        if (str == null) {
            i10.S1(1);
        } else {
            i10.i1(1, str);
        }
        this.f41471a.d();
        k4.x xVar = null;
        Cursor b10 = t3.b.b(this.f41471a, i10, false, null);
        try {
            if (b10.moveToFirst()) {
                if (b10.isNull(0)) {
                    valueOf = null;
                } else {
                    valueOf = Integer.valueOf(b10.getInt(0));
                }
                if (valueOf != null) {
                    b0 b0Var = b0.f41406a;
                    xVar = b0.f(valueOf.intValue());
                }
            }
            return xVar;
        } finally {
            b10.close();
            i10.p();
        }
    }

    @Override // p4.v
    public u i(String str) {
        r3.x xVar;
        int e10;
        int e11;
        int e12;
        int e13;
        int e14;
        int e15;
        int e16;
        int e17;
        int e18;
        int e19;
        int e20;
        int e21;
        int e22;
        int e23;
        u uVar;
        String string;
        String string2;
        String string3;
        byte[] blob;
        byte[] blob2;
        boolean z10;
        boolean z11;
        boolean z12;
        boolean z13;
        boolean z14;
        byte[] blob3;
        r3.x i10 = r3.x.i("SELECT * FROM workspec WHERE id=?", 1);
        if (str == null) {
            i10.S1(1);
        } else {
            i10.i1(1, str);
        }
        this.f41471a.d();
        Cursor b10 = t3.b.b(this.f41471a, i10, false, null);
        try {
            e10 = t3.a.e(b10, StackTraceHelper.ID_KEY);
            e11 = t3.a.e(b10, "state");
            e12 = t3.a.e(b10, "worker_class_name");
            e13 = t3.a.e(b10, "input_merger_class_name");
            e14 = t3.a.e(b10, "input");
            e15 = t3.a.e(b10, "output");
            e16 = t3.a.e(b10, "initial_delay");
            e17 = t3.a.e(b10, "interval_duration");
            e18 = t3.a.e(b10, "flex_duration");
            e19 = t3.a.e(b10, "run_attempt_count");
            e20 = t3.a.e(b10, "backoff_policy");
            e21 = t3.a.e(b10, "backoff_delay_duration");
            e22 = t3.a.e(b10, "last_enqueue_time");
            e23 = t3.a.e(b10, "minimum_retention_duration");
            xVar = i10;
        } catch (Throwable th2) {
            th = th2;
            xVar = i10;
        }
        try {
            int e24 = t3.a.e(b10, "schedule_requested_at");
            int e25 = t3.a.e(b10, "run_in_foreground");
            int e26 = t3.a.e(b10, "out_of_quota_policy");
            int e27 = t3.a.e(b10, "period_count");
            int e28 = t3.a.e(b10, "generation");
            int e29 = t3.a.e(b10, "next_schedule_time_override");
            int e30 = t3.a.e(b10, "next_schedule_time_override_generation");
            int e31 = t3.a.e(b10, "stop_reason");
            int e32 = t3.a.e(b10, "required_network_type");
            int e33 = t3.a.e(b10, "requires_charging");
            int e34 = t3.a.e(b10, "requires_device_idle");
            int e35 = t3.a.e(b10, "requires_battery_not_low");
            int e36 = t3.a.e(b10, "requires_storage_not_low");
            int e37 = t3.a.e(b10, "trigger_content_update_delay");
            int e38 = t3.a.e(b10, "trigger_max_content_delay");
            int e39 = t3.a.e(b10, "content_uri_triggers");
            if (b10.moveToFirst()) {
                if (b10.isNull(e10)) {
                    string = null;
                } else {
                    string = b10.getString(e10);
                }
                k4.x f10 = b0.f(b10.getInt(e11));
                if (b10.isNull(e12)) {
                    string2 = null;
                } else {
                    string2 = b10.getString(e12);
                }
                if (b10.isNull(e13)) {
                    string3 = null;
                } else {
                    string3 = b10.getString(e13);
                }
                if (b10.isNull(e14)) {
                    blob = null;
                } else {
                    blob = b10.getBlob(e14);
                }
                androidx.work.b g10 = androidx.work.b.g(blob);
                if (b10.isNull(e15)) {
                    blob2 = null;
                } else {
                    blob2 = b10.getBlob(e15);
                }
                androidx.work.b g11 = androidx.work.b.g(blob2);
                long j10 = b10.getLong(e16);
                long j11 = b10.getLong(e17);
                long j12 = b10.getLong(e18);
                int i11 = b10.getInt(e19);
                k4.a c10 = b0.c(b10.getInt(e20));
                long j13 = b10.getLong(e21);
                long j14 = b10.getLong(e22);
                long j15 = b10.getLong(e23);
                long j16 = b10.getLong(e24);
                if (b10.getInt(e25) != 0) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                k4.r e40 = b0.e(b10.getInt(e26));
                int i12 = b10.getInt(e27);
                int i13 = b10.getInt(e28);
                long j17 = b10.getLong(e29);
                int i14 = b10.getInt(e30);
                int i15 = b10.getInt(e31);
                k4.n d10 = b0.d(b10.getInt(e32));
                if (b10.getInt(e33) != 0) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                if (b10.getInt(e34) != 0) {
                    z12 = true;
                } else {
                    z12 = false;
                }
                if (b10.getInt(e35) != 0) {
                    z13 = true;
                } else {
                    z13 = false;
                }
                if (b10.getInt(e36) != 0) {
                    z14 = true;
                } else {
                    z14 = false;
                }
                long j18 = b10.getLong(e37);
                long j19 = b10.getLong(e38);
                if (b10.isNull(e39)) {
                    blob3 = null;
                } else {
                    blob3 = b10.getBlob(e39);
                }
                uVar = new u(string, f10, string2, string3, g10, g11, j10, j11, j12, new k4.d(d10, z11, z12, z13, z14, j18, j19, b0.b(blob3)), i11, c10, j13, j14, j15, j16, z10, e40, i12, i13, j17, i14, i15);
            } else {
                uVar = null;
            }
            b10.close();
            xVar.p();
            return uVar;
        } catch (Throwable th3) {
            th = th3;
            b10.close();
            xVar.p();
            throw th;
        }
    }

    @Override // p4.v
    public int j(String str) {
        this.f41471a.d();
        x3.k b10 = this.f41476f.b();
        if (str == null) {
            b10.S1(1);
        } else {
            b10.i1(1, str);
        }
        this.f41471a.e();
        try {
            int V = b10.V();
            this.f41471a.A();
            return V;
        } finally {
            this.f41471a.i();
            this.f41476f.h(b10);
        }
    }

    @Override // p4.v
    public List k(String str) {
        byte[] blob;
        r3.x i10 = r3.x.i("SELECT output FROM workspec WHERE id IN\n             (SELECT prerequisite_id FROM dependency WHERE work_spec_id=?)", 1);
        if (str == null) {
            i10.S1(1);
        } else {
            i10.i1(1, str);
        }
        this.f41471a.d();
        Cursor b10 = t3.b.b(this.f41471a, i10, false, null);
        try {
            ArrayList arrayList = new ArrayList(b10.getCount());
            while (b10.moveToNext()) {
                if (b10.isNull(0)) {
                    blob = null;
                } else {
                    blob = b10.getBlob(0);
                }
                arrayList.add(androidx.work.b.g(blob));
            }
            return arrayList;
        } finally {
            b10.close();
            i10.p();
        }
    }

    @Override // p4.v
    public List l(int i10) {
        r3.x xVar;
        String string;
        String string2;
        String string3;
        byte[] blob;
        byte[] blob2;
        boolean z10;
        boolean z11;
        boolean z12;
        boolean z13;
        boolean z14;
        byte[] blob3;
        r3.x i11 = r3.x.i("SELECT * FROM workspec WHERE state=0 ORDER BY last_enqueue_time LIMIT ?", 1);
        i11.v1(1, i10);
        this.f41471a.d();
        Cursor b10 = t3.b.b(this.f41471a, i11, false, null);
        try {
            int e10 = t3.a.e(b10, StackTraceHelper.ID_KEY);
            int e11 = t3.a.e(b10, "state");
            int e12 = t3.a.e(b10, "worker_class_name");
            int e13 = t3.a.e(b10, "input_merger_class_name");
            int e14 = t3.a.e(b10, "input");
            int e15 = t3.a.e(b10, "output");
            int e16 = t3.a.e(b10, "initial_delay");
            int e17 = t3.a.e(b10, "interval_duration");
            int e18 = t3.a.e(b10, "flex_duration");
            int e19 = t3.a.e(b10, "run_attempt_count");
            int e20 = t3.a.e(b10, "backoff_policy");
            int e21 = t3.a.e(b10, "backoff_delay_duration");
            int e22 = t3.a.e(b10, "last_enqueue_time");
            int e23 = t3.a.e(b10, "minimum_retention_duration");
            xVar = i11;
            try {
                int e24 = t3.a.e(b10, "schedule_requested_at");
                int e25 = t3.a.e(b10, "run_in_foreground");
                int e26 = t3.a.e(b10, "out_of_quota_policy");
                int e27 = t3.a.e(b10, "period_count");
                int e28 = t3.a.e(b10, "generation");
                int e29 = t3.a.e(b10, "next_schedule_time_override");
                int e30 = t3.a.e(b10, "next_schedule_time_override_generation");
                int e31 = t3.a.e(b10, "stop_reason");
                int e32 = t3.a.e(b10, "required_network_type");
                int e33 = t3.a.e(b10, "requires_charging");
                int e34 = t3.a.e(b10, "requires_device_idle");
                int e35 = t3.a.e(b10, "requires_battery_not_low");
                int e36 = t3.a.e(b10, "requires_storage_not_low");
                int e37 = t3.a.e(b10, "trigger_content_update_delay");
                int e38 = t3.a.e(b10, "trigger_max_content_delay");
                int e39 = t3.a.e(b10, "content_uri_triggers");
                int i12 = e23;
                ArrayList arrayList = new ArrayList(b10.getCount());
                while (b10.moveToNext()) {
                    if (b10.isNull(e10)) {
                        string = null;
                    } else {
                        string = b10.getString(e10);
                    }
                    k4.x f10 = b0.f(b10.getInt(e11));
                    if (b10.isNull(e12)) {
                        string2 = null;
                    } else {
                        string2 = b10.getString(e12);
                    }
                    if (b10.isNull(e13)) {
                        string3 = null;
                    } else {
                        string3 = b10.getString(e13);
                    }
                    if (b10.isNull(e14)) {
                        blob = null;
                    } else {
                        blob = b10.getBlob(e14);
                    }
                    androidx.work.b g10 = androidx.work.b.g(blob);
                    if (b10.isNull(e15)) {
                        blob2 = null;
                    } else {
                        blob2 = b10.getBlob(e15);
                    }
                    androidx.work.b g11 = androidx.work.b.g(blob2);
                    long j10 = b10.getLong(e16);
                    long j11 = b10.getLong(e17);
                    long j12 = b10.getLong(e18);
                    int i13 = b10.getInt(e19);
                    k4.a c10 = b0.c(b10.getInt(e20));
                    long j13 = b10.getLong(e21);
                    long j14 = b10.getLong(e22);
                    int i14 = i12;
                    long j15 = b10.getLong(i14);
                    int i15 = e10;
                    int i16 = e24;
                    long j16 = b10.getLong(i16);
                    e24 = i16;
                    int i17 = e25;
                    if (b10.getInt(i17) != 0) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    e25 = i17;
                    int i18 = e26;
                    k4.r e40 = b0.e(b10.getInt(i18));
                    e26 = i18;
                    int i19 = e27;
                    int i20 = b10.getInt(i19);
                    e27 = i19;
                    int i21 = e28;
                    int i22 = b10.getInt(i21);
                    e28 = i21;
                    int i23 = e29;
                    long j17 = b10.getLong(i23);
                    e29 = i23;
                    int i24 = e30;
                    int i25 = b10.getInt(i24);
                    e30 = i24;
                    int i26 = e31;
                    int i27 = b10.getInt(i26);
                    e31 = i26;
                    int i28 = e32;
                    k4.n d10 = b0.d(b10.getInt(i28));
                    e32 = i28;
                    int i29 = e33;
                    if (b10.getInt(i29) != 0) {
                        z11 = true;
                    } else {
                        z11 = false;
                    }
                    e33 = i29;
                    int i30 = e34;
                    if (b10.getInt(i30) != 0) {
                        z12 = true;
                    } else {
                        z12 = false;
                    }
                    e34 = i30;
                    int i31 = e35;
                    if (b10.getInt(i31) != 0) {
                        z13 = true;
                    } else {
                        z13 = false;
                    }
                    e35 = i31;
                    int i32 = e36;
                    if (b10.getInt(i32) != 0) {
                        z14 = true;
                    } else {
                        z14 = false;
                    }
                    e36 = i32;
                    int i33 = e37;
                    long j18 = b10.getLong(i33);
                    e37 = i33;
                    int i34 = e38;
                    long j19 = b10.getLong(i34);
                    e38 = i34;
                    int i35 = e39;
                    if (b10.isNull(i35)) {
                        blob3 = null;
                    } else {
                        blob3 = b10.getBlob(i35);
                    }
                    e39 = i35;
                    arrayList.add(new u(string, f10, string2, string3, g10, g11, j10, j11, j12, new k4.d(d10, z11, z12, z13, z14, j18, j19, b0.b(blob3)), i13, c10, j13, j14, j15, j16, z10, e40, i20, i22, j17, i25, i27));
                    e10 = i15;
                    i12 = i14;
                }
                b10.close();
                xVar.p();
                return arrayList;
            } catch (Throwable th2) {
                th = th2;
                b10.close();
                xVar.p();
                throw th;
            }
        } catch (Throwable th3) {
            th = th3;
            xVar = i11;
        }
    }

    @Override // p4.v
    public int m() {
        this.f41471a.d();
        x3.k b10 = this.f41485o.b();
        this.f41471a.e();
        try {
            int V = b10.V();
            this.f41471a.A();
            return V;
        } finally {
            this.f41471a.i();
            this.f41485o.h(b10);
        }
    }

    @Override // p4.v
    public void n(u uVar) {
        this.f41471a.d();
        this.f41471a.e();
        try {
            this.f41472b.j(uVar);
            this.f41471a.A();
        } finally {
            this.f41471a.i();
        }
    }

    @Override // p4.v
    public int o(String str, long j10) {
        this.f41471a.d();
        x3.k b10 = this.f41484n.b();
        b10.v1(1, j10);
        if (str == null) {
            b10.S1(2);
        } else {
            b10.i1(2, str);
        }
        this.f41471a.e();
        try {
            int V = b10.V();
            this.f41471a.A();
            return V;
        } finally {
            this.f41471a.i();
            this.f41484n.h(b10);
        }
    }

    @Override // p4.v
    public List p(String str) {
        String string;
        r3.x i10 = r3.x.i("SELECT id, state FROM workspec WHERE id IN (SELECT work_spec_id FROM workname WHERE name=?)", 1);
        if (str == null) {
            i10.S1(1);
        } else {
            i10.i1(1, str);
        }
        this.f41471a.d();
        Cursor b10 = t3.b.b(this.f41471a, i10, false, null);
        try {
            ArrayList arrayList = new ArrayList(b10.getCount());
            while (b10.moveToNext()) {
                if (b10.isNull(0)) {
                    string = null;
                } else {
                    string = b10.getString(0);
                }
                arrayList.add(new u.b(string, b0.f(b10.getInt(1))));
            }
            return arrayList;
        } finally {
            b10.close();
            i10.p();
        }
    }

    @Override // p4.v
    public List q(int i10) {
        r3.x xVar;
        String string;
        String string2;
        String string3;
        byte[] blob;
        byte[] blob2;
        boolean z10;
        boolean z11;
        boolean z12;
        boolean z13;
        boolean z14;
        byte[] blob3;
        r3.x i11 = r3.x.i("SELECT * FROM workspec WHERE state=0 AND schedule_requested_at=-1 ORDER BY last_enqueue_time LIMIT (SELECT MAX(?-COUNT(*), 0) FROM workspec WHERE schedule_requested_at<>-1 AND LENGTH(content_uri_triggers)=0 AND state NOT IN (2, 3, 5))", 1);
        i11.v1(1, i10);
        this.f41471a.d();
        Cursor b10 = t3.b.b(this.f41471a, i11, false, null);
        try {
            int e10 = t3.a.e(b10, StackTraceHelper.ID_KEY);
            int e11 = t3.a.e(b10, "state");
            int e12 = t3.a.e(b10, "worker_class_name");
            int e13 = t3.a.e(b10, "input_merger_class_name");
            int e14 = t3.a.e(b10, "input");
            int e15 = t3.a.e(b10, "output");
            int e16 = t3.a.e(b10, "initial_delay");
            int e17 = t3.a.e(b10, "interval_duration");
            int e18 = t3.a.e(b10, "flex_duration");
            int e19 = t3.a.e(b10, "run_attempt_count");
            int e20 = t3.a.e(b10, "backoff_policy");
            int e21 = t3.a.e(b10, "backoff_delay_duration");
            int e22 = t3.a.e(b10, "last_enqueue_time");
            int e23 = t3.a.e(b10, "minimum_retention_duration");
            xVar = i11;
            try {
                int e24 = t3.a.e(b10, "schedule_requested_at");
                int e25 = t3.a.e(b10, "run_in_foreground");
                int e26 = t3.a.e(b10, "out_of_quota_policy");
                int e27 = t3.a.e(b10, "period_count");
                int e28 = t3.a.e(b10, "generation");
                int e29 = t3.a.e(b10, "next_schedule_time_override");
                int e30 = t3.a.e(b10, "next_schedule_time_override_generation");
                int e31 = t3.a.e(b10, "stop_reason");
                int e32 = t3.a.e(b10, "required_network_type");
                int e33 = t3.a.e(b10, "requires_charging");
                int e34 = t3.a.e(b10, "requires_device_idle");
                int e35 = t3.a.e(b10, "requires_battery_not_low");
                int e36 = t3.a.e(b10, "requires_storage_not_low");
                int e37 = t3.a.e(b10, "trigger_content_update_delay");
                int e38 = t3.a.e(b10, "trigger_max_content_delay");
                int e39 = t3.a.e(b10, "content_uri_triggers");
                int i12 = e23;
                ArrayList arrayList = new ArrayList(b10.getCount());
                while (b10.moveToNext()) {
                    if (b10.isNull(e10)) {
                        string = null;
                    } else {
                        string = b10.getString(e10);
                    }
                    k4.x f10 = b0.f(b10.getInt(e11));
                    if (b10.isNull(e12)) {
                        string2 = null;
                    } else {
                        string2 = b10.getString(e12);
                    }
                    if (b10.isNull(e13)) {
                        string3 = null;
                    } else {
                        string3 = b10.getString(e13);
                    }
                    if (b10.isNull(e14)) {
                        blob = null;
                    } else {
                        blob = b10.getBlob(e14);
                    }
                    androidx.work.b g10 = androidx.work.b.g(blob);
                    if (b10.isNull(e15)) {
                        blob2 = null;
                    } else {
                        blob2 = b10.getBlob(e15);
                    }
                    androidx.work.b g11 = androidx.work.b.g(blob2);
                    long j10 = b10.getLong(e16);
                    long j11 = b10.getLong(e17);
                    long j12 = b10.getLong(e18);
                    int i13 = b10.getInt(e19);
                    k4.a c10 = b0.c(b10.getInt(e20));
                    long j13 = b10.getLong(e21);
                    long j14 = b10.getLong(e22);
                    int i14 = i12;
                    long j15 = b10.getLong(i14);
                    int i15 = e10;
                    int i16 = e24;
                    long j16 = b10.getLong(i16);
                    e24 = i16;
                    int i17 = e25;
                    if (b10.getInt(i17) != 0) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    e25 = i17;
                    int i18 = e26;
                    k4.r e40 = b0.e(b10.getInt(i18));
                    e26 = i18;
                    int i19 = e27;
                    int i20 = b10.getInt(i19);
                    e27 = i19;
                    int i21 = e28;
                    int i22 = b10.getInt(i21);
                    e28 = i21;
                    int i23 = e29;
                    long j17 = b10.getLong(i23);
                    e29 = i23;
                    int i24 = e30;
                    int i25 = b10.getInt(i24);
                    e30 = i24;
                    int i26 = e31;
                    int i27 = b10.getInt(i26);
                    e31 = i26;
                    int i28 = e32;
                    k4.n d10 = b0.d(b10.getInt(i28));
                    e32 = i28;
                    int i29 = e33;
                    if (b10.getInt(i29) != 0) {
                        z11 = true;
                    } else {
                        z11 = false;
                    }
                    e33 = i29;
                    int i30 = e34;
                    if (b10.getInt(i30) != 0) {
                        z12 = true;
                    } else {
                        z12 = false;
                    }
                    e34 = i30;
                    int i31 = e35;
                    if (b10.getInt(i31) != 0) {
                        z13 = true;
                    } else {
                        z13 = false;
                    }
                    e35 = i31;
                    int i32 = e36;
                    if (b10.getInt(i32) != 0) {
                        z14 = true;
                    } else {
                        z14 = false;
                    }
                    e36 = i32;
                    int i33 = e37;
                    long j18 = b10.getLong(i33);
                    e37 = i33;
                    int i34 = e38;
                    long j19 = b10.getLong(i34);
                    e38 = i34;
                    int i35 = e39;
                    if (b10.isNull(i35)) {
                        blob3 = null;
                    } else {
                        blob3 = b10.getBlob(i35);
                    }
                    e39 = i35;
                    arrayList.add(new u(string, f10, string2, string3, g10, g11, j10, j11, j12, new k4.d(d10, z11, z12, z13, z14, j18, j19, b0.b(blob3)), i13, c10, j13, j14, j15, j16, z10, e40, i20, i22, j17, i25, i27));
                    e10 = i15;
                    i12 = i14;
                }
                b10.close();
                xVar.p();
                return arrayList;
            } catch (Throwable th2) {
                th = th2;
                b10.close();
                xVar.p();
                throw th;
            }
        } catch (Throwable th3) {
            th = th3;
            xVar = i11;
        }
    }

    @Override // p4.v
    public void r(String str, androidx.work.b bVar) {
        this.f41471a.d();
        x3.k b10 = this.f41478h.b();
        byte[] o10 = androidx.work.b.o(bVar);
        if (o10 == null) {
            b10.S1(1);
        } else {
            b10.D1(1, o10);
        }
        if (str == null) {
            b10.S1(2);
        } else {
            b10.i1(2, str);
        }
        this.f41471a.e();
        try {
            b10.V();
            this.f41471a.A();
        } finally {
            this.f41471a.i();
            this.f41478h.h(b10);
        }
    }

    @Override // p4.v
    public void s(String str, long j10) {
        this.f41471a.d();
        x3.k b10 = this.f41479i.b();
        b10.v1(1, j10);
        if (str == null) {
            b10.S1(2);
        } else {
            b10.i1(2, str);
        }
        this.f41471a.e();
        try {
            b10.V();
            this.f41471a.A();
        } finally {
            this.f41471a.i();
            this.f41479i.h(b10);
        }
    }

    @Override // p4.v
    public List t() {
        r3.x xVar;
        String string;
        String string2;
        String string3;
        byte[] blob;
        byte[] blob2;
        boolean z10;
        boolean z11;
        boolean z12;
        boolean z13;
        boolean z14;
        byte[] blob3;
        r3.x i10 = r3.x.i("SELECT * FROM workspec WHERE state=1", 0);
        this.f41471a.d();
        Cursor b10 = t3.b.b(this.f41471a, i10, false, null);
        try {
            int e10 = t3.a.e(b10, StackTraceHelper.ID_KEY);
            int e11 = t3.a.e(b10, "state");
            int e12 = t3.a.e(b10, "worker_class_name");
            int e13 = t3.a.e(b10, "input_merger_class_name");
            int e14 = t3.a.e(b10, "input");
            int e15 = t3.a.e(b10, "output");
            int e16 = t3.a.e(b10, "initial_delay");
            int e17 = t3.a.e(b10, "interval_duration");
            int e18 = t3.a.e(b10, "flex_duration");
            int e19 = t3.a.e(b10, "run_attempt_count");
            int e20 = t3.a.e(b10, "backoff_policy");
            int e21 = t3.a.e(b10, "backoff_delay_duration");
            int e22 = t3.a.e(b10, "last_enqueue_time");
            int e23 = t3.a.e(b10, "minimum_retention_duration");
            xVar = i10;
            try {
                int e24 = t3.a.e(b10, "schedule_requested_at");
                int e25 = t3.a.e(b10, "run_in_foreground");
                int e26 = t3.a.e(b10, "out_of_quota_policy");
                int e27 = t3.a.e(b10, "period_count");
                int e28 = t3.a.e(b10, "generation");
                int e29 = t3.a.e(b10, "next_schedule_time_override");
                int e30 = t3.a.e(b10, "next_schedule_time_override_generation");
                int e31 = t3.a.e(b10, "stop_reason");
                int e32 = t3.a.e(b10, "required_network_type");
                int e33 = t3.a.e(b10, "requires_charging");
                int e34 = t3.a.e(b10, "requires_device_idle");
                int e35 = t3.a.e(b10, "requires_battery_not_low");
                int e36 = t3.a.e(b10, "requires_storage_not_low");
                int e37 = t3.a.e(b10, "trigger_content_update_delay");
                int e38 = t3.a.e(b10, "trigger_max_content_delay");
                int e39 = t3.a.e(b10, "content_uri_triggers");
                int i11 = e23;
                ArrayList arrayList = new ArrayList(b10.getCount());
                while (b10.moveToNext()) {
                    if (b10.isNull(e10)) {
                        string = null;
                    } else {
                        string = b10.getString(e10);
                    }
                    k4.x f10 = b0.f(b10.getInt(e11));
                    if (b10.isNull(e12)) {
                        string2 = null;
                    } else {
                        string2 = b10.getString(e12);
                    }
                    if (b10.isNull(e13)) {
                        string3 = null;
                    } else {
                        string3 = b10.getString(e13);
                    }
                    if (b10.isNull(e14)) {
                        blob = null;
                    } else {
                        blob = b10.getBlob(e14);
                    }
                    androidx.work.b g10 = androidx.work.b.g(blob);
                    if (b10.isNull(e15)) {
                        blob2 = null;
                    } else {
                        blob2 = b10.getBlob(e15);
                    }
                    androidx.work.b g11 = androidx.work.b.g(blob2);
                    long j10 = b10.getLong(e16);
                    long j11 = b10.getLong(e17);
                    long j12 = b10.getLong(e18);
                    int i12 = b10.getInt(e19);
                    k4.a c10 = b0.c(b10.getInt(e20));
                    long j13 = b10.getLong(e21);
                    long j14 = b10.getLong(e22);
                    int i13 = i11;
                    long j15 = b10.getLong(i13);
                    int i14 = e10;
                    int i15 = e24;
                    long j16 = b10.getLong(i15);
                    e24 = i15;
                    int i16 = e25;
                    if (b10.getInt(i16) != 0) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    e25 = i16;
                    int i17 = e26;
                    k4.r e40 = b0.e(b10.getInt(i17));
                    e26 = i17;
                    int i18 = e27;
                    int i19 = b10.getInt(i18);
                    e27 = i18;
                    int i20 = e28;
                    int i21 = b10.getInt(i20);
                    e28 = i20;
                    int i22 = e29;
                    long j17 = b10.getLong(i22);
                    e29 = i22;
                    int i23 = e30;
                    int i24 = b10.getInt(i23);
                    e30 = i23;
                    int i25 = e31;
                    int i26 = b10.getInt(i25);
                    e31 = i25;
                    int i27 = e32;
                    k4.n d10 = b0.d(b10.getInt(i27));
                    e32 = i27;
                    int i28 = e33;
                    if (b10.getInt(i28) != 0) {
                        z11 = true;
                    } else {
                        z11 = false;
                    }
                    e33 = i28;
                    int i29 = e34;
                    if (b10.getInt(i29) != 0) {
                        z12 = true;
                    } else {
                        z12 = false;
                    }
                    e34 = i29;
                    int i30 = e35;
                    if (b10.getInt(i30) != 0) {
                        z13 = true;
                    } else {
                        z13 = false;
                    }
                    e35 = i30;
                    int i31 = e36;
                    if (b10.getInt(i31) != 0) {
                        z14 = true;
                    } else {
                        z14 = false;
                    }
                    e36 = i31;
                    int i32 = e37;
                    long j18 = b10.getLong(i32);
                    e37 = i32;
                    int i33 = e38;
                    long j19 = b10.getLong(i33);
                    e38 = i33;
                    int i34 = e39;
                    if (b10.isNull(i34)) {
                        blob3 = null;
                    } else {
                        blob3 = b10.getBlob(i34);
                    }
                    e39 = i34;
                    arrayList.add(new u(string, f10, string2, string3, g10, g11, j10, j11, j12, new k4.d(d10, z11, z12, z13, z14, j18, j19, b0.b(blob3)), i12, c10, j13, j14, j15, j16, z10, e40, i19, i21, j17, i24, i26));
                    e10 = i14;
                    i11 = i13;
                }
                b10.close();
                xVar.p();
                return arrayList;
            } catch (Throwable th2) {
                th = th2;
                b10.close();
                xVar.p();
                throw th;
            }
        } catch (Throwable th3) {
            th = th3;
            xVar = i10;
        }
    }

    @Override // p4.v
    public boolean u() {
        boolean z10 = false;
        r3.x i10 = r3.x.i("SELECT COUNT(*) > 0 FROM workspec WHERE state NOT IN (2, 3, 5) LIMIT 1", 0);
        this.f41471a.d();
        Cursor b10 = t3.b.b(this.f41471a, i10, false, null);
        try {
            if (b10.moveToFirst()) {
                if (b10.getInt(0) != 0) {
                    z10 = true;
                }
            }
            return z10;
        } finally {
            b10.close();
            i10.p();
        }
    }

    @Override // p4.v
    public List v() {
        r3.x xVar;
        String string;
        String string2;
        String string3;
        byte[] blob;
        byte[] blob2;
        boolean z10;
        boolean z11;
        boolean z12;
        boolean z13;
        boolean z14;
        byte[] blob3;
        r3.x i10 = r3.x.i("SELECT * FROM workspec WHERE state=0 AND schedule_requested_at=-1 AND LENGTH(content_uri_triggers)<>0 ORDER BY last_enqueue_time", 0);
        this.f41471a.d();
        Cursor b10 = t3.b.b(this.f41471a, i10, false, null);
        try {
            int e10 = t3.a.e(b10, StackTraceHelper.ID_KEY);
            int e11 = t3.a.e(b10, "state");
            int e12 = t3.a.e(b10, "worker_class_name");
            int e13 = t3.a.e(b10, "input_merger_class_name");
            int e14 = t3.a.e(b10, "input");
            int e15 = t3.a.e(b10, "output");
            int e16 = t3.a.e(b10, "initial_delay");
            int e17 = t3.a.e(b10, "interval_duration");
            int e18 = t3.a.e(b10, "flex_duration");
            int e19 = t3.a.e(b10, "run_attempt_count");
            int e20 = t3.a.e(b10, "backoff_policy");
            int e21 = t3.a.e(b10, "backoff_delay_duration");
            int e22 = t3.a.e(b10, "last_enqueue_time");
            int e23 = t3.a.e(b10, "minimum_retention_duration");
            xVar = i10;
            try {
                int e24 = t3.a.e(b10, "schedule_requested_at");
                int e25 = t3.a.e(b10, "run_in_foreground");
                int e26 = t3.a.e(b10, "out_of_quota_policy");
                int e27 = t3.a.e(b10, "period_count");
                int e28 = t3.a.e(b10, "generation");
                int e29 = t3.a.e(b10, "next_schedule_time_override");
                int e30 = t3.a.e(b10, "next_schedule_time_override_generation");
                int e31 = t3.a.e(b10, "stop_reason");
                int e32 = t3.a.e(b10, "required_network_type");
                int e33 = t3.a.e(b10, "requires_charging");
                int e34 = t3.a.e(b10, "requires_device_idle");
                int e35 = t3.a.e(b10, "requires_battery_not_low");
                int e36 = t3.a.e(b10, "requires_storage_not_low");
                int e37 = t3.a.e(b10, "trigger_content_update_delay");
                int e38 = t3.a.e(b10, "trigger_max_content_delay");
                int e39 = t3.a.e(b10, "content_uri_triggers");
                int i11 = e23;
                ArrayList arrayList = new ArrayList(b10.getCount());
                while (b10.moveToNext()) {
                    if (b10.isNull(e10)) {
                        string = null;
                    } else {
                        string = b10.getString(e10);
                    }
                    k4.x f10 = b0.f(b10.getInt(e11));
                    if (b10.isNull(e12)) {
                        string2 = null;
                    } else {
                        string2 = b10.getString(e12);
                    }
                    if (b10.isNull(e13)) {
                        string3 = null;
                    } else {
                        string3 = b10.getString(e13);
                    }
                    if (b10.isNull(e14)) {
                        blob = null;
                    } else {
                        blob = b10.getBlob(e14);
                    }
                    androidx.work.b g10 = androidx.work.b.g(blob);
                    if (b10.isNull(e15)) {
                        blob2 = null;
                    } else {
                        blob2 = b10.getBlob(e15);
                    }
                    androidx.work.b g11 = androidx.work.b.g(blob2);
                    long j10 = b10.getLong(e16);
                    long j11 = b10.getLong(e17);
                    long j12 = b10.getLong(e18);
                    int i12 = b10.getInt(e19);
                    k4.a c10 = b0.c(b10.getInt(e20));
                    long j13 = b10.getLong(e21);
                    long j14 = b10.getLong(e22);
                    int i13 = i11;
                    long j15 = b10.getLong(i13);
                    int i14 = e10;
                    int i15 = e24;
                    long j16 = b10.getLong(i15);
                    e24 = i15;
                    int i16 = e25;
                    if (b10.getInt(i16) != 0) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    e25 = i16;
                    int i17 = e26;
                    k4.r e40 = b0.e(b10.getInt(i17));
                    e26 = i17;
                    int i18 = e27;
                    int i19 = b10.getInt(i18);
                    e27 = i18;
                    int i20 = e28;
                    int i21 = b10.getInt(i20);
                    e28 = i20;
                    int i22 = e29;
                    long j17 = b10.getLong(i22);
                    e29 = i22;
                    int i23 = e30;
                    int i24 = b10.getInt(i23);
                    e30 = i23;
                    int i25 = e31;
                    int i26 = b10.getInt(i25);
                    e31 = i25;
                    int i27 = e32;
                    k4.n d10 = b0.d(b10.getInt(i27));
                    e32 = i27;
                    int i28 = e33;
                    if (b10.getInt(i28) != 0) {
                        z11 = true;
                    } else {
                        z11 = false;
                    }
                    e33 = i28;
                    int i29 = e34;
                    if (b10.getInt(i29) != 0) {
                        z12 = true;
                    } else {
                        z12 = false;
                    }
                    e34 = i29;
                    int i30 = e35;
                    if (b10.getInt(i30) != 0) {
                        z13 = true;
                    } else {
                        z13 = false;
                    }
                    e35 = i30;
                    int i31 = e36;
                    if (b10.getInt(i31) != 0) {
                        z14 = true;
                    } else {
                        z14 = false;
                    }
                    e36 = i31;
                    int i32 = e37;
                    long j18 = b10.getLong(i32);
                    e37 = i32;
                    int i33 = e38;
                    long j19 = b10.getLong(i33);
                    e38 = i33;
                    int i34 = e39;
                    if (b10.isNull(i34)) {
                        blob3 = null;
                    } else {
                        blob3 = b10.getBlob(i34);
                    }
                    e39 = i34;
                    arrayList.add(new u(string, f10, string2, string3, g10, g11, j10, j11, j12, new k4.d(d10, z11, z12, z13, z14, j18, j19, b0.b(blob3)), i12, c10, j13, j14, j15, j16, z10, e40, i19, i21, j17, i24, i26));
                    e10 = i14;
                    i11 = i13;
                }
                b10.close();
                xVar.p();
                return arrayList;
            } catch (Throwable th2) {
                th = th2;
                b10.close();
                xVar.p();
                throw th;
            }
        } catch (Throwable th3) {
            th = th3;
            xVar = i10;
        }
    }

    @Override // p4.v
    public int w(String str) {
        this.f41471a.d();
        x3.k b10 = this.f41481k.b();
        if (str == null) {
            b10.S1(1);
        } else {
            b10.i1(1, str);
        }
        this.f41471a.e();
        try {
            int V = b10.V();
            this.f41471a.A();
            return V;
        } finally {
            this.f41471a.i();
            this.f41481k.h(b10);
        }
    }

    @Override // p4.v
    public int x(String str) {
        this.f41471a.d();
        x3.k b10 = this.f41480j.b();
        if (str == null) {
            b10.S1(1);
        } else {
            b10.i1(1, str);
        }
        this.f41471a.e();
        try {
            int V = b10.V();
            this.f41471a.A();
            return V;
        } finally {
            this.f41471a.i();
            this.f41480j.h(b10);
        }
    }

    @Override // p4.v
    public int y() {
        int i10 = 0;
        r3.x i11 = r3.x.i("Select COUNT(*) FROM workspec WHERE LENGTH(content_uri_triggers)<>0 AND state NOT IN (2, 3, 5)", 0);
        this.f41471a.d();
        Cursor b10 = t3.b.b(this.f41471a, i11, false, null);
        try {
            if (b10.moveToFirst()) {
                i10 = b10.getInt(0);
            }
            return i10;
        } finally {
            b10.close();
            i11.p();
        }
    }

    @Override // p4.v
    public void z(String str, int i10) {
        this.f41471a.d();
        x3.k b10 = this.f41483m.b();
        if (str == null) {
            b10.S1(1);
        } else {
            b10.i1(1, str);
        }
        b10.v1(2, i10);
        this.f41471a.e();
        try {
            b10.V();
            this.f41471a.A();
        } finally {
            this.f41471a.i();
            this.f41483m.h(b10);
        }
    }
}
