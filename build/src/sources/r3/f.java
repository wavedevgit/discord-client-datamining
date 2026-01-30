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
    public final Context f47892a;

    /* renamed from: b  reason: collision with root package name */
    public final String f47893b;

    /* renamed from: c  reason: collision with root package name */
    public final h.c f47894c;

    /* renamed from: d  reason: collision with root package name */
    public final u.e f47895d;

    /* renamed from: e  reason: collision with root package name */
    public final List f47896e;

    /* renamed from: f  reason: collision with root package name */
    public final boolean f47897f;

    /* renamed from: g  reason: collision with root package name */
    public final u.d f47898g;

    /* renamed from: h  reason: collision with root package name */
    public final Executor f47899h;

    /* renamed from: i  reason: collision with root package name */
    public final Executor f47900i;

    /* renamed from: j  reason: collision with root package name */
    public final Intent f47901j;

    /* renamed from: k  reason: collision with root package name */
    public final boolean f47902k;

    /* renamed from: l  reason: collision with root package name */
    public final boolean f47903l;

    /* renamed from: m  reason: collision with root package name */
    private final Set f47904m;

    /* renamed from: n  reason: collision with root package name */
    public final String f47905n;

    /* renamed from: o  reason: collision with root package name */
    public final File f47906o;

    /* renamed from: p  reason: collision with root package name */
    public final Callable f47907p;

    /* renamed from: q  reason: collision with root package name */
    public final List f47908q;

    /* renamed from: r  reason: collision with root package name */
    public final List f47909r;

    /* renamed from: s  reason: collision with root package name */
    public final boolean f47910s;

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
        this.f47892a = context;
        this.f47893b = str;
        this.f47894c = sqliteOpenHelperFactory;
        this.f47895d = migrationContainer;
        this.f47896e = list;
        this.f47897f = z10;
        this.f47898g = journalMode;
        this.f47899h = queryExecutor;
        this.f47900i = transactionExecutor;
        this.f47901j = intent;
        this.f47902k = z11;
        this.f47903l = z12;
        this.f47904m = set;
        this.f47905n = str2;
        this.f47906o = file;
        this.f47907p = callable;
        this.f47908q = typeConverters;
        this.f47909r = autoMigrationSpecs;
        if (intent != null) {
            z13 = true;
        } else {
            z13 = false;
        }
        this.f47910s = z13;
    }

    public boolean a(int i10, int i11) {
        Set set;
        if ((i10 > i11 && this.f47903l) || !this.f47902k || ((set = this.f47904m) != null && set.contains(Integer.valueOf(i10)))) {
            return false;
        }
        return true;
    }
}
