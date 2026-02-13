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
    public final Context f46539a;

    /* renamed from: b  reason: collision with root package name */
    public final String f46540b;

    /* renamed from: c  reason: collision with root package name */
    public final h.c f46541c;

    /* renamed from: d  reason: collision with root package name */
    public final u.e f46542d;

    /* renamed from: e  reason: collision with root package name */
    public final List f46543e;

    /* renamed from: f  reason: collision with root package name */
    public final boolean f46544f;

    /* renamed from: g  reason: collision with root package name */
    public final u.d f46545g;

    /* renamed from: h  reason: collision with root package name */
    public final Executor f46546h;

    /* renamed from: i  reason: collision with root package name */
    public final Executor f46547i;

    /* renamed from: j  reason: collision with root package name */
    public final Intent f46548j;

    /* renamed from: k  reason: collision with root package name */
    public final boolean f46549k;

    /* renamed from: l  reason: collision with root package name */
    public final boolean f46550l;

    /* renamed from: m  reason: collision with root package name */
    private final Set f46551m;

    /* renamed from: n  reason: collision with root package name */
    public final String f46552n;

    /* renamed from: o  reason: collision with root package name */
    public final File f46553o;

    /* renamed from: p  reason: collision with root package name */
    public final Callable f46554p;

    /* renamed from: q  reason: collision with root package name */
    public final List f46555q;

    /* renamed from: r  reason: collision with root package name */
    public final List f46556r;

    /* renamed from: s  reason: collision with root package name */
    public final boolean f46557s;

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
        this.f46539a = context;
        this.f46540b = str;
        this.f46541c = sqliteOpenHelperFactory;
        this.f46542d = migrationContainer;
        this.f46543e = list;
        this.f46544f = z10;
        this.f46545g = journalMode;
        this.f46546h = queryExecutor;
        this.f46547i = transactionExecutor;
        this.f46548j = intent;
        this.f46549k = z11;
        this.f46550l = z12;
        this.f46551m = set;
        this.f46552n = str2;
        this.f46553o = file;
        this.f46554p = callable;
        this.f46555q = typeConverters;
        this.f46556r = autoMigrationSpecs;
        if (intent != null) {
            z13 = true;
        } else {
            z13 = false;
        }
        this.f46557s = z13;
    }

    public boolean a(int i10, int i11) {
        Set set;
        if ((i10 > i11 && this.f46550l) || !this.f46549k || ((set = this.f46551m) != null && set.contains(Integer.valueOf(i10)))) {
            return false;
        }
        return true;
    }
}
