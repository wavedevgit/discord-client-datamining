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
    public final Context f48410a;

    /* renamed from: b  reason: collision with root package name */
    public final String f48411b;

    /* renamed from: c  reason: collision with root package name */
    public final h.c f48412c;

    /* renamed from: d  reason: collision with root package name */
    public final u.e f48413d;

    /* renamed from: e  reason: collision with root package name */
    public final List f48414e;

    /* renamed from: f  reason: collision with root package name */
    public final boolean f48415f;

    /* renamed from: g  reason: collision with root package name */
    public final u.d f48416g;

    /* renamed from: h  reason: collision with root package name */
    public final Executor f48417h;

    /* renamed from: i  reason: collision with root package name */
    public final Executor f48418i;

    /* renamed from: j  reason: collision with root package name */
    public final Intent f48419j;

    /* renamed from: k  reason: collision with root package name */
    public final boolean f48420k;

    /* renamed from: l  reason: collision with root package name */
    public final boolean f48421l;

    /* renamed from: m  reason: collision with root package name */
    private final Set f48422m;

    /* renamed from: n  reason: collision with root package name */
    public final String f48423n;

    /* renamed from: o  reason: collision with root package name */
    public final File f48424o;

    /* renamed from: p  reason: collision with root package name */
    public final Callable f48425p;

    /* renamed from: q  reason: collision with root package name */
    public final List f48426q;

    /* renamed from: r  reason: collision with root package name */
    public final List f48427r;

    /* renamed from: s  reason: collision with root package name */
    public final boolean f48428s;

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
        this.f48410a = context;
        this.f48411b = str;
        this.f48412c = sqliteOpenHelperFactory;
        this.f48413d = migrationContainer;
        this.f48414e = list;
        this.f48415f = z10;
        this.f48416g = journalMode;
        this.f48417h = queryExecutor;
        this.f48418i = transactionExecutor;
        this.f48419j = intent;
        this.f48420k = z11;
        this.f48421l = z12;
        this.f48422m = set;
        this.f48423n = str2;
        this.f48424o = file;
        this.f48425p = callable;
        this.f48426q = typeConverters;
        this.f48427r = autoMigrationSpecs;
        if (intent != null) {
            z13 = true;
        } else {
            z13 = false;
        }
        this.f48428s = z13;
    }

    public boolean a(int i10, int i11) {
        Set set;
        if ((i10 > i11 && this.f48421l) || !this.f48420k || ((set = this.f48422m) != null && set.contains(Integer.valueOf(i10)))) {
            return false;
        }
        return true;
    }
}
