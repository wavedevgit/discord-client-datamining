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
    public final Context f48494a;

    /* renamed from: b  reason: collision with root package name */
    public final String f48495b;

    /* renamed from: c  reason: collision with root package name */
    public final h.c f48496c;

    /* renamed from: d  reason: collision with root package name */
    public final u.e f48497d;

    /* renamed from: e  reason: collision with root package name */
    public final List f48498e;

    /* renamed from: f  reason: collision with root package name */
    public final boolean f48499f;

    /* renamed from: g  reason: collision with root package name */
    public final u.d f48500g;

    /* renamed from: h  reason: collision with root package name */
    public final Executor f48501h;

    /* renamed from: i  reason: collision with root package name */
    public final Executor f48502i;

    /* renamed from: j  reason: collision with root package name */
    public final Intent f48503j;

    /* renamed from: k  reason: collision with root package name */
    public final boolean f48504k;

    /* renamed from: l  reason: collision with root package name */
    public final boolean f48505l;

    /* renamed from: m  reason: collision with root package name */
    private final Set f48506m;

    /* renamed from: n  reason: collision with root package name */
    public final String f48507n;

    /* renamed from: o  reason: collision with root package name */
    public final File f48508o;

    /* renamed from: p  reason: collision with root package name */
    public final Callable f48509p;

    /* renamed from: q  reason: collision with root package name */
    public final List f48510q;

    /* renamed from: r  reason: collision with root package name */
    public final List f48511r;

    /* renamed from: s  reason: collision with root package name */
    public final boolean f48512s;

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
        this.f48494a = context;
        this.f48495b = str;
        this.f48496c = sqliteOpenHelperFactory;
        this.f48497d = migrationContainer;
        this.f48498e = list;
        this.f48499f = z10;
        this.f48500g = journalMode;
        this.f48501h = queryExecutor;
        this.f48502i = transactionExecutor;
        this.f48503j = intent;
        this.f48504k = z11;
        this.f48505l = z12;
        this.f48506m = set;
        this.f48507n = str2;
        this.f48508o = file;
        this.f48509p = callable;
        this.f48510q = typeConverters;
        this.f48511r = autoMigrationSpecs;
        if (intent != null) {
            z13 = true;
        } else {
            z13 = false;
        }
        this.f48512s = z13;
    }

    public boolean a(int i10, int i11) {
        Set set;
        if ((i10 > i11 && this.f48505l) || !this.f48504k || ((set = this.f48506m) != null && set.contains(Integer.valueOf(i10)))) {
            return false;
        }
        return true;
    }
}
