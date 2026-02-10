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
    public final Context f45970a;

    /* renamed from: b  reason: collision with root package name */
    public final String f45971b;

    /* renamed from: c  reason: collision with root package name */
    public final h.c f45972c;

    /* renamed from: d  reason: collision with root package name */
    public final u.e f45973d;

    /* renamed from: e  reason: collision with root package name */
    public final List f45974e;

    /* renamed from: f  reason: collision with root package name */
    public final boolean f45975f;

    /* renamed from: g  reason: collision with root package name */
    public final u.d f45976g;

    /* renamed from: h  reason: collision with root package name */
    public final Executor f45977h;

    /* renamed from: i  reason: collision with root package name */
    public final Executor f45978i;

    /* renamed from: j  reason: collision with root package name */
    public final Intent f45979j;

    /* renamed from: k  reason: collision with root package name */
    public final boolean f45980k;

    /* renamed from: l  reason: collision with root package name */
    public final boolean f45981l;

    /* renamed from: m  reason: collision with root package name */
    private final Set f45982m;

    /* renamed from: n  reason: collision with root package name */
    public final String f45983n;

    /* renamed from: o  reason: collision with root package name */
    public final File f45984o;

    /* renamed from: p  reason: collision with root package name */
    public final Callable f45985p;

    /* renamed from: q  reason: collision with root package name */
    public final List f45986q;

    /* renamed from: r  reason: collision with root package name */
    public final List f45987r;

    /* renamed from: s  reason: collision with root package name */
    public final boolean f45988s;

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
        this.f45970a = context;
        this.f45971b = str;
        this.f45972c = sqliteOpenHelperFactory;
        this.f45973d = migrationContainer;
        this.f45974e = list;
        this.f45975f = z10;
        this.f45976g = journalMode;
        this.f45977h = queryExecutor;
        this.f45978i = transactionExecutor;
        this.f45979j = intent;
        this.f45980k = z11;
        this.f45981l = z12;
        this.f45982m = set;
        this.f45983n = str2;
        this.f45984o = file;
        this.f45985p = callable;
        this.f45986q = typeConverters;
        this.f45987r = autoMigrationSpecs;
        if (intent != null) {
            z13 = true;
        } else {
            z13 = false;
        }
        this.f45988s = z13;
    }

    public boolean a(int i10, int i11) {
        Set set;
        if ((i10 > i11 && this.f45981l) || !this.f45980k || ((set = this.f45982m) != null && set.contains(Integer.valueOf(i10)))) {
            return false;
        }
        return true;
    }
}
