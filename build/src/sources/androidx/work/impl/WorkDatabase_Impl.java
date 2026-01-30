package androidx.work.impl;

import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.views.progressbar.ReactProgressBarViewManager;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import r3.u;
import r3.w;
import t3.d;
import x3.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class WorkDatabase_Impl extends WorkDatabase {

    /* renamed from: q  reason: collision with root package name */
    private volatile p4.v f5508q;

    /* renamed from: r  reason: collision with root package name */
    private volatile p4.b f5509r;

    /* renamed from: s  reason: collision with root package name */
    private volatile p4.z f5510s;

    /* renamed from: t  reason: collision with root package name */
    private volatile p4.j f5511t;

    /* renamed from: u  reason: collision with root package name */
    private volatile p4.o f5512u;

    /* renamed from: v  reason: collision with root package name */
    private volatile p4.r f5513v;

    /* renamed from: w  reason: collision with root package name */
    private volatile p4.e f5514w;

    @Override // androidx.work.impl.WorkDatabase
    public p4.b C() {
        p4.b bVar;
        if (this.f5509r != null) {
            return this.f5509r;
        }
        synchronized (this) {
            try {
                if (this.f5509r == null) {
                    this.f5509r = new p4.c(this);
                }
                bVar = this.f5509r;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return bVar;
    }

    @Override // androidx.work.impl.WorkDatabase
    public p4.e D() {
        p4.e eVar;
        if (this.f5514w != null) {
            return this.f5514w;
        }
        synchronized (this) {
            try {
                if (this.f5514w == null) {
                    this.f5514w = new p4.f(this);
                }
                eVar = this.f5514w;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return eVar;
    }

    @Override // androidx.work.impl.WorkDatabase
    public p4.j E() {
        p4.j jVar;
        if (this.f5511t != null) {
            return this.f5511t;
        }
        synchronized (this) {
            try {
                if (this.f5511t == null) {
                    this.f5511t = new p4.k(this);
                }
                jVar = this.f5511t;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return jVar;
    }

    @Override // androidx.work.impl.WorkDatabase
    public p4.o F() {
        p4.o oVar;
        if (this.f5512u != null) {
            return this.f5512u;
        }
        synchronized (this) {
            try {
                if (this.f5512u == null) {
                    this.f5512u = new p4.p(this);
                }
                oVar = this.f5512u;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return oVar;
    }

    @Override // androidx.work.impl.WorkDatabase
    public p4.r G() {
        p4.r rVar;
        if (this.f5513v != null) {
            return this.f5513v;
        }
        synchronized (this) {
            try {
                if (this.f5513v == null) {
                    this.f5513v = new p4.s(this);
                }
                rVar = this.f5513v;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return rVar;
    }

    @Override // androidx.work.impl.WorkDatabase
    public p4.v H() {
        p4.v vVar;
        if (this.f5508q != null) {
            return this.f5508q;
        }
        synchronized (this) {
            try {
                if (this.f5508q == null) {
                    this.f5508q = new p4.w(this);
                }
                vVar = this.f5508q;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return vVar;
    }

    @Override // androidx.work.impl.WorkDatabase
    public p4.z I() {
        p4.z zVar;
        if (this.f5510s != null) {
            return this.f5510s;
        }
        synchronized (this) {
            try {
                if (this.f5510s == null) {
                    this.f5510s = new p4.a0(this);
                }
                zVar = this.f5510s;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return zVar;
    }

    @Override // r3.u
    protected r3.o g() {
        return new r3.o(this, new HashMap(0), new HashMap(0), "Dependency", "WorkSpec", "WorkTag", "SystemIdInfo", "WorkName", "WorkProgress", "Preference");
    }

    @Override // r3.u
    protected x3.h h(r3.f fVar) {
        return fVar.f47894c.a(h.b.a(fVar.f47892a).d(fVar.f47893b).c(new r3.w(fVar, new a(20), "7d73d21f1bd82c9e5268b6dcf9fde2cb", "3071c8717539de5d5353f4c8cd59a032")).b());
    }

    @Override // r3.u
    public List j(Map map) {
        return Arrays.asList(new h0(), new i0(), new j0(), new k0(), new l0(), new m0());
    }

    @Override // r3.u
    public Set o() {
        return new HashSet();
    }

    @Override // r3.u
    protected Map p() {
        HashMap hashMap = new HashMap();
        hashMap.put(p4.v.class, p4.w.A());
        hashMap.put(p4.b.class, p4.c.e());
        hashMap.put(p4.z.class, p4.a0.e());
        hashMap.put(p4.j.class, p4.k.j());
        hashMap.put(p4.o.class, p4.p.c());
        hashMap.put(p4.r.class, p4.s.c());
        hashMap.put(p4.e.class, p4.f.c());
        hashMap.put(p4.g.class, p4.h.a());
        return hashMap;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a extends w.b {
        a(int i10) {
            super(i10);
        }

        @Override // r3.w.b
        public void a(x3.g gVar) {
            gVar.K("CREATE TABLE IF NOT EXISTS `Dependency` (`work_spec_id` TEXT NOT NULL, `prerequisite_id` TEXT NOT NULL, PRIMARY KEY(`work_spec_id`, `prerequisite_id`), FOREIGN KEY(`work_spec_id`) REFERENCES `WorkSpec`(`id`) ON UPDATE CASCADE ON DELETE CASCADE , FOREIGN KEY(`prerequisite_id`) REFERENCES `WorkSpec`(`id`) ON UPDATE CASCADE ON DELETE CASCADE )");
            gVar.K("CREATE INDEX IF NOT EXISTS `index_Dependency_work_spec_id` ON `Dependency` (`work_spec_id`)");
            gVar.K("CREATE INDEX IF NOT EXISTS `index_Dependency_prerequisite_id` ON `Dependency` (`prerequisite_id`)");
            gVar.K("CREATE TABLE IF NOT EXISTS `WorkSpec` (`id` TEXT NOT NULL, `state` INTEGER NOT NULL, `worker_class_name` TEXT NOT NULL, `input_merger_class_name` TEXT NOT NULL, `input` BLOB NOT NULL, `output` BLOB NOT NULL, `initial_delay` INTEGER NOT NULL, `interval_duration` INTEGER NOT NULL, `flex_duration` INTEGER NOT NULL, `run_attempt_count` INTEGER NOT NULL, `backoff_policy` INTEGER NOT NULL, `backoff_delay_duration` INTEGER NOT NULL, `last_enqueue_time` INTEGER NOT NULL DEFAULT -1, `minimum_retention_duration` INTEGER NOT NULL, `schedule_requested_at` INTEGER NOT NULL, `run_in_foreground` INTEGER NOT NULL, `out_of_quota_policy` INTEGER NOT NULL, `period_count` INTEGER NOT NULL DEFAULT 0, `generation` INTEGER NOT NULL DEFAULT 0, `next_schedule_time_override` INTEGER NOT NULL DEFAULT 9223372036854775807, `next_schedule_time_override_generation` INTEGER NOT NULL DEFAULT 0, `stop_reason` INTEGER NOT NULL DEFAULT -256, `required_network_type` INTEGER NOT NULL, `requires_charging` INTEGER NOT NULL, `requires_device_idle` INTEGER NOT NULL, `requires_battery_not_low` INTEGER NOT NULL, `requires_storage_not_low` INTEGER NOT NULL, `trigger_content_update_delay` INTEGER NOT NULL, `trigger_max_content_delay` INTEGER NOT NULL, `content_uri_triggers` BLOB NOT NULL, PRIMARY KEY(`id`))");
            gVar.K("CREATE INDEX IF NOT EXISTS `index_WorkSpec_schedule_requested_at` ON `WorkSpec` (`schedule_requested_at`)");
            gVar.K("CREATE INDEX IF NOT EXISTS `index_WorkSpec_last_enqueue_time` ON `WorkSpec` (`last_enqueue_time`)");
            gVar.K("CREATE TABLE IF NOT EXISTS `WorkTag` (`tag` TEXT NOT NULL, `work_spec_id` TEXT NOT NULL, PRIMARY KEY(`tag`, `work_spec_id`), FOREIGN KEY(`work_spec_id`) REFERENCES `WorkSpec`(`id`) ON UPDATE CASCADE ON DELETE CASCADE )");
            gVar.K("CREATE INDEX IF NOT EXISTS `index_WorkTag_work_spec_id` ON `WorkTag` (`work_spec_id`)");
            gVar.K("CREATE TABLE IF NOT EXISTS `SystemIdInfo` (`work_spec_id` TEXT NOT NULL, `generation` INTEGER NOT NULL DEFAULT 0, `system_id` INTEGER NOT NULL, PRIMARY KEY(`work_spec_id`, `generation`), FOREIGN KEY(`work_spec_id`) REFERENCES `WorkSpec`(`id`) ON UPDATE CASCADE ON DELETE CASCADE )");
            gVar.K("CREATE TABLE IF NOT EXISTS `WorkName` (`name` TEXT NOT NULL, `work_spec_id` TEXT NOT NULL, PRIMARY KEY(`name`, `work_spec_id`), FOREIGN KEY(`work_spec_id`) REFERENCES `WorkSpec`(`id`) ON UPDATE CASCADE ON DELETE CASCADE )");
            gVar.K("CREATE INDEX IF NOT EXISTS `index_WorkName_work_spec_id` ON `WorkName` (`work_spec_id`)");
            gVar.K("CREATE TABLE IF NOT EXISTS `WorkProgress` (`work_spec_id` TEXT NOT NULL, `progress` BLOB NOT NULL, PRIMARY KEY(`work_spec_id`), FOREIGN KEY(`work_spec_id`) REFERENCES `WorkSpec`(`id`) ON UPDATE CASCADE ON DELETE CASCADE )");
            gVar.K("CREATE TABLE IF NOT EXISTS `Preference` (`key` TEXT NOT NULL, `long_value` INTEGER, PRIMARY KEY(`key`))");
            gVar.K("CREATE TABLE IF NOT EXISTS room_master_table (id INTEGER PRIMARY KEY,identity_hash TEXT)");
            gVar.K("INSERT OR REPLACE INTO room_master_table (id,identity_hash) VALUES(42, '7d73d21f1bd82c9e5268b6dcf9fde2cb')");
        }

        @Override // r3.w.b
        public void b(x3.g gVar) {
            gVar.K("DROP TABLE IF EXISTS `Dependency`");
            gVar.K("DROP TABLE IF EXISTS `WorkSpec`");
            gVar.K("DROP TABLE IF EXISTS `WorkTag`");
            gVar.K("DROP TABLE IF EXISTS `SystemIdInfo`");
            gVar.K("DROP TABLE IF EXISTS `WorkName`");
            gVar.K("DROP TABLE IF EXISTS `WorkProgress`");
            gVar.K("DROP TABLE IF EXISTS `Preference`");
            if (((r3.u) WorkDatabase_Impl.this).f47976h != null) {
                int size = ((r3.u) WorkDatabase_Impl.this).f47976h.size();
                for (int i10 = 0; i10 < size; i10++) {
                    ((u.b) ((r3.u) WorkDatabase_Impl.this).f47976h.get(i10)).b(gVar);
                }
            }
        }

        @Override // r3.w.b
        public void c(x3.g gVar) {
            if (((r3.u) WorkDatabase_Impl.this).f47976h != null) {
                int size = ((r3.u) WorkDatabase_Impl.this).f47976h.size();
                for (int i10 = 0; i10 < size; i10++) {
                    ((u.b) ((r3.u) WorkDatabase_Impl.this).f47976h.get(i10)).a(gVar);
                }
            }
        }

        @Override // r3.w.b
        public void d(x3.g gVar) {
            ((r3.u) WorkDatabase_Impl.this).f47969a = gVar;
            gVar.K("PRAGMA foreign_keys = ON");
            WorkDatabase_Impl.this.u(gVar);
            if (((r3.u) WorkDatabase_Impl.this).f47976h != null) {
                int size = ((r3.u) WorkDatabase_Impl.this).f47976h.size();
                for (int i10 = 0; i10 < size; i10++) {
                    ((u.b) ((r3.u) WorkDatabase_Impl.this).f47976h.get(i10)).c(gVar);
                }
            }
        }

        @Override // r3.w.b
        public void f(x3.g gVar) {
            t3.b.a(gVar);
        }

        @Override // r3.w.b
        public w.c g(x3.g gVar) {
            HashMap hashMap = new HashMap(2);
            hashMap.put("work_spec_id", new d.a("work_spec_id", "TEXT", true, 1, null, 1));
            hashMap.put("prerequisite_id", new d.a("prerequisite_id", "TEXT", true, 2, null, 1));
            HashSet hashSet = new HashSet(2);
            hashSet.add(new d.c("WorkSpec", "CASCADE", "CASCADE", Arrays.asList("work_spec_id"), Arrays.asList(StackTraceHelper.ID_KEY)));
            hashSet.add(new d.c("WorkSpec", "CASCADE", "CASCADE", Arrays.asList("prerequisite_id"), Arrays.asList(StackTraceHelper.ID_KEY)));
            HashSet hashSet2 = new HashSet(2);
            hashSet2.add(new d.e("index_Dependency_work_spec_id", false, Arrays.asList("work_spec_id"), Arrays.asList("ASC")));
            hashSet2.add(new d.e("index_Dependency_prerequisite_id", false, Arrays.asList("prerequisite_id"), Arrays.asList("ASC")));
            t3.d dVar = new t3.d("Dependency", hashMap, hashSet, hashSet2);
            t3.d a10 = t3.d.a(gVar, "Dependency");
            if (!dVar.equals(a10)) {
                return new w.c(false, "Dependency(androidx.work.impl.model.Dependency).\n Expected:\n" + dVar + "\n Found:\n" + a10);
            }
            HashMap hashMap2 = new HashMap(30);
            hashMap2.put(StackTraceHelper.ID_KEY, new d.a(StackTraceHelper.ID_KEY, "TEXT", true, 1, null, 1));
            hashMap2.put("state", new d.a("state", "INTEGER", true, 0, null, 1));
            hashMap2.put("worker_class_name", new d.a("worker_class_name", "TEXT", true, 0, null, 1));
            hashMap2.put("input_merger_class_name", new d.a("input_merger_class_name", "TEXT", true, 0, null, 1));
            hashMap2.put("input", new d.a("input", "BLOB", true, 0, null, 1));
            hashMap2.put("output", new d.a("output", "BLOB", true, 0, null, 1));
            hashMap2.put("initial_delay", new d.a("initial_delay", "INTEGER", true, 0, null, 1));
            hashMap2.put("interval_duration", new d.a("interval_duration", "INTEGER", true, 0, null, 1));
            hashMap2.put("flex_duration", new d.a("flex_duration", "INTEGER", true, 0, null, 1));
            hashMap2.put("run_attempt_count", new d.a("run_attempt_count", "INTEGER", true, 0, null, 1));
            hashMap2.put("backoff_policy", new d.a("backoff_policy", "INTEGER", true, 0, null, 1));
            hashMap2.put("backoff_delay_duration", new d.a("backoff_delay_duration", "INTEGER", true, 0, null, 1));
            hashMap2.put("last_enqueue_time", new d.a("last_enqueue_time", "INTEGER", true, 0, "-1", 1));
            hashMap2.put("minimum_retention_duration", new d.a("minimum_retention_duration", "INTEGER", true, 0, null, 1));
            hashMap2.put("schedule_requested_at", new d.a("schedule_requested_at", "INTEGER", true, 0, null, 1));
            hashMap2.put("run_in_foreground", new d.a("run_in_foreground", "INTEGER", true, 0, null, 1));
            hashMap2.put("out_of_quota_policy", new d.a("out_of_quota_policy", "INTEGER", true, 0, null, 1));
            hashMap2.put("period_count", new d.a("period_count", "INTEGER", true, 0, "0", 1));
            hashMap2.put("generation", new d.a("generation", "INTEGER", true, 0, "0", 1));
            hashMap2.put("next_schedule_time_override", new d.a("next_schedule_time_override", "INTEGER", true, 0, "9223372036854775807", 1));
            hashMap2.put("next_schedule_time_override_generation", new d.a("next_schedule_time_override_generation", "INTEGER", true, 0, "0", 1));
            hashMap2.put("stop_reason", new d.a("stop_reason", "INTEGER", true, 0, "-256", 1));
            hashMap2.put("required_network_type", new d.a("required_network_type", "INTEGER", true, 0, null, 1));
            hashMap2.put("requires_charging", new d.a("requires_charging", "INTEGER", true, 0, null, 1));
            hashMap2.put("requires_device_idle", new d.a("requires_device_idle", "INTEGER", true, 0, null, 1));
            hashMap2.put("requires_battery_not_low", new d.a("requires_battery_not_low", "INTEGER", true, 0, null, 1));
            hashMap2.put("requires_storage_not_low", new d.a("requires_storage_not_low", "INTEGER", true, 0, null, 1));
            hashMap2.put("trigger_content_update_delay", new d.a("trigger_content_update_delay", "INTEGER", true, 0, null, 1));
            hashMap2.put("trigger_max_content_delay", new d.a("trigger_max_content_delay", "INTEGER", true, 0, null, 1));
            hashMap2.put("content_uri_triggers", new d.a("content_uri_triggers", "BLOB", true, 0, null, 1));
            HashSet hashSet3 = new HashSet(0);
            HashSet hashSet4 = new HashSet(2);
            hashSet4.add(new d.e("index_WorkSpec_schedule_requested_at", false, Arrays.asList("schedule_requested_at"), Arrays.asList("ASC")));
            hashSet4.add(new d.e("index_WorkSpec_last_enqueue_time", false, Arrays.asList("last_enqueue_time"), Arrays.asList("ASC")));
            t3.d dVar2 = new t3.d("WorkSpec", hashMap2, hashSet3, hashSet4);
            t3.d a11 = t3.d.a(gVar, "WorkSpec");
            if (!dVar2.equals(a11)) {
                return new w.c(false, "WorkSpec(androidx.work.impl.model.WorkSpec).\n Expected:\n" + dVar2 + "\n Found:\n" + a11);
            }
            HashMap hashMap3 = new HashMap(2);
            hashMap3.put("tag", new d.a("tag", "TEXT", true, 1, null, 1));
            hashMap3.put("work_spec_id", new d.a("work_spec_id", "TEXT", true, 2, null, 1));
            HashSet hashSet5 = new HashSet(1);
            hashSet5.add(new d.c("WorkSpec", "CASCADE", "CASCADE", Arrays.asList("work_spec_id"), Arrays.asList(StackTraceHelper.ID_KEY)));
            HashSet hashSet6 = new HashSet(1);
            hashSet6.add(new d.e("index_WorkTag_work_spec_id", false, Arrays.asList("work_spec_id"), Arrays.asList("ASC")));
            t3.d dVar3 = new t3.d("WorkTag", hashMap3, hashSet5, hashSet6);
            t3.d a12 = t3.d.a(gVar, "WorkTag");
            if (!dVar3.equals(a12)) {
                return new w.c(false, "WorkTag(androidx.work.impl.model.WorkTag).\n Expected:\n" + dVar3 + "\n Found:\n" + a12);
            }
            HashMap hashMap4 = new HashMap(3);
            hashMap4.put("work_spec_id", new d.a("work_spec_id", "TEXT", true, 1, null, 1));
            hashMap4.put("generation", new d.a("generation", "INTEGER", true, 2, "0", 1));
            hashMap4.put("system_id", new d.a("system_id", "INTEGER", true, 0, null, 1));
            HashSet hashSet7 = new HashSet(1);
            hashSet7.add(new d.c("WorkSpec", "CASCADE", "CASCADE", Arrays.asList("work_spec_id"), Arrays.asList(StackTraceHelper.ID_KEY)));
            t3.d dVar4 = new t3.d("SystemIdInfo", hashMap4, hashSet7, new HashSet(0));
            t3.d a13 = t3.d.a(gVar, "SystemIdInfo");
            if (!dVar4.equals(a13)) {
                return new w.c(false, "SystemIdInfo(androidx.work.impl.model.SystemIdInfo).\n Expected:\n" + dVar4 + "\n Found:\n" + a13);
            }
            HashMap hashMap5 = new HashMap(2);
            hashMap5.put(StackTraceHelper.NAME_KEY, new d.a(StackTraceHelper.NAME_KEY, "TEXT", true, 1, null, 1));
            hashMap5.put("work_spec_id", new d.a("work_spec_id", "TEXT", true, 2, null, 1));
            HashSet hashSet8 = new HashSet(1);
            hashSet8.add(new d.c("WorkSpec", "CASCADE", "CASCADE", Arrays.asList("work_spec_id"), Arrays.asList(StackTraceHelper.ID_KEY)));
            HashSet hashSet9 = new HashSet(1);
            hashSet9.add(new d.e("index_WorkName_work_spec_id", false, Arrays.asList("work_spec_id"), Arrays.asList("ASC")));
            t3.d dVar5 = new t3.d("WorkName", hashMap5, hashSet8, hashSet9);
            t3.d a14 = t3.d.a(gVar, "WorkName");
            if (!dVar5.equals(a14)) {
                return new w.c(false, "WorkName(androidx.work.impl.model.WorkName).\n Expected:\n" + dVar5 + "\n Found:\n" + a14);
            }
            HashMap hashMap6 = new HashMap(2);
            hashMap6.put("work_spec_id", new d.a("work_spec_id", "TEXT", true, 1, null, 1));
            hashMap6.put(ReactProgressBarViewManager.PROP_PROGRESS, new d.a(ReactProgressBarViewManager.PROP_PROGRESS, "BLOB", true, 0, null, 1));
            HashSet hashSet10 = new HashSet(1);
            hashSet10.add(new d.c("WorkSpec", "CASCADE", "CASCADE", Arrays.asList("work_spec_id"), Arrays.asList(StackTraceHelper.ID_KEY)));
            t3.d dVar6 = new t3.d("WorkProgress", hashMap6, hashSet10, new HashSet(0));
            t3.d a15 = t3.d.a(gVar, "WorkProgress");
            if (!dVar6.equals(a15)) {
                return new w.c(false, "WorkProgress(androidx.work.impl.model.WorkProgress).\n Expected:\n" + dVar6 + "\n Found:\n" + a15);
            }
            HashMap hashMap7 = new HashMap(2);
            hashMap7.put("key", new d.a("key", "TEXT", true, 1, null, 1));
            hashMap7.put("long_value", new d.a("long_value", "INTEGER", false, 0, null, 1));
            t3.d dVar7 = new t3.d("Preference", hashMap7, new HashSet(0), new HashSet(0));
            t3.d a16 = t3.d.a(gVar, "Preference");
            if (!dVar7.equals(a16)) {
                return new w.c(false, "Preference(androidx.work.impl.model.Preference).\n Expected:\n" + dVar7 + "\n Found:\n" + a16);
            }
            return new w.c(true, null);
        }

        @Override // r3.w.b
        public void e(x3.g gVar) {
        }
    }
}
