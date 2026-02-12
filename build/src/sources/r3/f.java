package r3;

import android.content.Context;
import android.content.Intent;
import java.io.File;
import java.util.List;
import java.util.Set;
import java.util.concurrent.Callable;
import java.util.concurrent.Executor;
import kotlin.jvm.internal.Intrinsics;
import r3.u;
import x3.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    public final Context f45971a;

    /* renamed from: b  reason: collision with root package name */
    public final String f45972b;

    /* renamed from: c  reason: collision with root package name */
    public final h.c f45973c;

    /* renamed from: d  reason: collision with root package name */
    public final u.e f45974d;

    /* renamed from: e  reason: collision with root package name */
    public final List f45975e;

    /* renamed from: f  reason: collision with root package name */
    public final boolean f45976f;

    /* renamed from: g  reason: collision with root package name */
    public final u.d f45977g;

    /* renamed from: h  reason: collision with root package name */
    public final Executor f45978h;

    /* renamed from: i  reason: collision with root package name */
    public final Executor f45979i;

    /* renamed from: j  reason: collision with root package name */
    public final Intent f45980j;

    /* renamed from: k  reason: collision with root package name */
    public final boolean f45981k;

    /* renamed from: l  reason: collision with root package name */
    public final boolean f45982l;

    /* renamed from: m  reason: collision with root package name */
    private final Set f45983m;

    /* renamed from: n  reason: collision with root package name */
    public final String f45984n;

    /* renamed from: o  reason: collision with root package name */
    public final File f45985o;

    /* renamed from: p  reason: collision with root package name */
    public final Callable f45986p;

    /* renamed from: q  reason: collision with root package name */
    public final List f45987q;

    /* renamed from: r  reason: collision with root package name */
    public final List f45988r;

    /* renamed from: s  reason: collision with root package name */
    public final boolean f45989s;

    public f(Context context, String str, h.c sqliteOpenHelperFactory, u.e migrationContainer, List list, boolean z10, u.d journalMode, Executor queryExecutor, Executor transactionExecutor, Intent intent, boolean z11, boolean z12, Set set, String str2, File file, Callable callable, u.f fVar, List typeConverters, List autoMigrationSpecs) {
        boolean z13;
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(sqliteOpenHelperFactory, "sqliteOpenHelperFactory");
        Intrinsics.checkNotNullParameter(migrationContainer, "migrationContainer");
        Intrinsics.checkNotNullParameter(journalMode, "journalMode");
        Intrinsics.checkNotNullParameter(queryExecutor, "queryExecutor");
        Intrinsics.checkNotNullParameter(transactionExecutor, "transactionExecutor");
        Intrinsics.checkNotNullParameter(typeConverters, "typeConverters");
        Intrinsics.checkNotNullParameter(autoMigrationSpecs, "autoMigrationSpecs");
        this.f45971a = context;
        this.f45972b = str;
        this.f45973c = sqliteOpenHelperFactory;
        this.f45974d = migrationContainer;
        this.f45975e = list;
        this.f45976f = z10;
        this.f45977g = journalMode;
        this.f45978h = queryExecutor;
        this.f45979i = transactionExecutor;
        this.f45980j = intent;
        this.f45981k = z11;
        this.f45982l = z12;
        this.f45983m = set;
        this.f45984n = str2;
        this.f45985o = file;
        this.f45986p = callable;
        this.f45987q = typeConverters;
        this.f45988r = autoMigrationSpecs;
        if (intent != null) {
            z13 = true;
        } else {
            z13 = false;
        }
        this.f45989s = z13;
    }

    public boolean a(int i10, int i11) {
        Set set;
        if ((i10 > i11 && this.f45982l) || !this.f45981k || ((set = this.f45983m) != null && set.contains(Integer.valueOf(i10)))) {
            return false;
        }
        return true;
    }
}
