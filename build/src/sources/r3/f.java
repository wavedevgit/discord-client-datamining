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
    public final Context f47876a;

    /* renamed from: b  reason: collision with root package name */
    public final String f47877b;

    /* renamed from: c  reason: collision with root package name */
    public final h.c f47878c;

    /* renamed from: d  reason: collision with root package name */
    public final u.e f47879d;

    /* renamed from: e  reason: collision with root package name */
    public final List f47880e;

    /* renamed from: f  reason: collision with root package name */
    public final boolean f47881f;

    /* renamed from: g  reason: collision with root package name */
    public final u.d f47882g;

    /* renamed from: h  reason: collision with root package name */
    public final Executor f47883h;

    /* renamed from: i  reason: collision with root package name */
    public final Executor f47884i;

    /* renamed from: j  reason: collision with root package name */
    public final Intent f47885j;

    /* renamed from: k  reason: collision with root package name */
    public final boolean f47886k;

    /* renamed from: l  reason: collision with root package name */
    public final boolean f47887l;

    /* renamed from: m  reason: collision with root package name */
    private final Set f47888m;

    /* renamed from: n  reason: collision with root package name */
    public final String f47889n;

    /* renamed from: o  reason: collision with root package name */
    public final File f47890o;

    /* renamed from: p  reason: collision with root package name */
    public final Callable f47891p;

    /* renamed from: q  reason: collision with root package name */
    public final List f47892q;

    /* renamed from: r  reason: collision with root package name */
    public final List f47893r;

    /* renamed from: s  reason: collision with root package name */
    public final boolean f47894s;

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
        this.f47876a = context;
        this.f47877b = str;
        this.f47878c = sqliteOpenHelperFactory;
        this.f47879d = migrationContainer;
        this.f47880e = list;
        this.f47881f = z10;
        this.f47882g = journalMode;
        this.f47883h = queryExecutor;
        this.f47884i = transactionExecutor;
        this.f47885j = intent;
        this.f47886k = z11;
        this.f47887l = z12;
        this.f47888m = set;
        this.f47889n = str2;
        this.f47890o = file;
        this.f47891p = callable;
        this.f47892q = typeConverters;
        this.f47893r = autoMigrationSpecs;
        if (intent != null) {
            z13 = true;
        } else {
            z13 = false;
        }
        this.f47894s = z13;
    }

    public boolean a(int i10, int i11) {
        Set set;
        if ((i10 > i11 && this.f47887l) || !this.f47886k || ((set = this.f47888m) != null && set.contains(Integer.valueOf(i10)))) {
            return false;
        }
        return true;
    }
}
