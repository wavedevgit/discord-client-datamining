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
    public final Context f48403a;

    /* renamed from: b  reason: collision with root package name */
    public final String f48404b;

    /* renamed from: c  reason: collision with root package name */
    public final h.c f48405c;

    /* renamed from: d  reason: collision with root package name */
    public final u.e f48406d;

    /* renamed from: e  reason: collision with root package name */
    public final List f48407e;

    /* renamed from: f  reason: collision with root package name */
    public final boolean f48408f;

    /* renamed from: g  reason: collision with root package name */
    public final u.d f48409g;

    /* renamed from: h  reason: collision with root package name */
    public final Executor f48410h;

    /* renamed from: i  reason: collision with root package name */
    public final Executor f48411i;

    /* renamed from: j  reason: collision with root package name */
    public final Intent f48412j;

    /* renamed from: k  reason: collision with root package name */
    public final boolean f48413k;

    /* renamed from: l  reason: collision with root package name */
    public final boolean f48414l;

    /* renamed from: m  reason: collision with root package name */
    private final Set f48415m;

    /* renamed from: n  reason: collision with root package name */
    public final String f48416n;

    /* renamed from: o  reason: collision with root package name */
    public final File f48417o;

    /* renamed from: p  reason: collision with root package name */
    public final Callable f48418p;

    /* renamed from: q  reason: collision with root package name */
    public final List f48419q;

    /* renamed from: r  reason: collision with root package name */
    public final List f48420r;

    /* renamed from: s  reason: collision with root package name */
    public final boolean f48421s;

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
        this.f48403a = context;
        this.f48404b = str;
        this.f48405c = sqliteOpenHelperFactory;
        this.f48406d = migrationContainer;
        this.f48407e = list;
        this.f48408f = z10;
        this.f48409g = journalMode;
        this.f48410h = queryExecutor;
        this.f48411i = transactionExecutor;
        this.f48412j = intent;
        this.f48413k = z11;
        this.f48414l = z12;
        this.f48415m = set;
        this.f48416n = str2;
        this.f48417o = file;
        this.f48418p = callable;
        this.f48419q = typeConverters;
        this.f48420r = autoMigrationSpecs;
        if (intent != null) {
            z13 = true;
        } else {
            z13 = false;
        }
        this.f48421s = z13;
    }

    public boolean a(int i10, int i11) {
        Set set;
        if ((i10 > i11 && this.f48414l) || !this.f48413k || ((set = this.f48415m) != null && set.contains(Integer.valueOf(i10)))) {
            return false;
        }
        return true;
    }
}
