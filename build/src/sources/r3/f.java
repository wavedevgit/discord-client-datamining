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
    public final Context f47516a;

    /* renamed from: b  reason: collision with root package name */
    public final String f47517b;

    /* renamed from: c  reason: collision with root package name */
    public final h.c f47518c;

    /* renamed from: d  reason: collision with root package name */
    public final u.e f47519d;

    /* renamed from: e  reason: collision with root package name */
    public final List f47520e;

    /* renamed from: f  reason: collision with root package name */
    public final boolean f47521f;

    /* renamed from: g  reason: collision with root package name */
    public final u.d f47522g;

    /* renamed from: h  reason: collision with root package name */
    public final Executor f47523h;

    /* renamed from: i  reason: collision with root package name */
    public final Executor f47524i;

    /* renamed from: j  reason: collision with root package name */
    public final Intent f47525j;

    /* renamed from: k  reason: collision with root package name */
    public final boolean f47526k;

    /* renamed from: l  reason: collision with root package name */
    public final boolean f47527l;

    /* renamed from: m  reason: collision with root package name */
    private final Set f47528m;

    /* renamed from: n  reason: collision with root package name */
    public final String f47529n;

    /* renamed from: o  reason: collision with root package name */
    public final File f47530o;

    /* renamed from: p  reason: collision with root package name */
    public final Callable f47531p;

    /* renamed from: q  reason: collision with root package name */
    public final List f47532q;

    /* renamed from: r  reason: collision with root package name */
    public final List f47533r;

    /* renamed from: s  reason: collision with root package name */
    public final boolean f47534s;

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
        this.f47516a = context;
        this.f47517b = str;
        this.f47518c = sqliteOpenHelperFactory;
        this.f47519d = migrationContainer;
        this.f47520e = list;
        this.f47521f = z10;
        this.f47522g = journalMode;
        this.f47523h = queryExecutor;
        this.f47524i = transactionExecutor;
        this.f47525j = intent;
        this.f47526k = z11;
        this.f47527l = z12;
        this.f47528m = set;
        this.f47529n = str2;
        this.f47530o = file;
        this.f47531p = callable;
        this.f47532q = typeConverters;
        this.f47533r = autoMigrationSpecs;
        if (intent != null) {
            z13 = true;
        } else {
            z13 = false;
        }
        this.f47534s = z13;
    }

    public boolean a(int i10, int i11) {
        Set set;
        if ((i10 > i11 && this.f47527l) || !this.f47526k || ((set = this.f47528m) != null && set.contains(Integer.valueOf(i10)))) {
            return false;
        }
        return true;
    }
}
