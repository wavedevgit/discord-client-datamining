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
    public final Context f48400a;

    /* renamed from: b  reason: collision with root package name */
    public final String f48401b;

    /* renamed from: c  reason: collision with root package name */
    public final h.c f48402c;

    /* renamed from: d  reason: collision with root package name */
    public final u.e f48403d;

    /* renamed from: e  reason: collision with root package name */
    public final List f48404e;

    /* renamed from: f  reason: collision with root package name */
    public final boolean f48405f;

    /* renamed from: g  reason: collision with root package name */
    public final u.d f48406g;

    /* renamed from: h  reason: collision with root package name */
    public final Executor f48407h;

    /* renamed from: i  reason: collision with root package name */
    public final Executor f48408i;

    /* renamed from: j  reason: collision with root package name */
    public final Intent f48409j;

    /* renamed from: k  reason: collision with root package name */
    public final boolean f48410k;

    /* renamed from: l  reason: collision with root package name */
    public final boolean f48411l;

    /* renamed from: m  reason: collision with root package name */
    private final Set f48412m;

    /* renamed from: n  reason: collision with root package name */
    public final String f48413n;

    /* renamed from: o  reason: collision with root package name */
    public final File f48414o;

    /* renamed from: p  reason: collision with root package name */
    public final Callable f48415p;

    /* renamed from: q  reason: collision with root package name */
    public final List f48416q;

    /* renamed from: r  reason: collision with root package name */
    public final List f48417r;

    /* renamed from: s  reason: collision with root package name */
    public final boolean f48418s;

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
        this.f48400a = context;
        this.f48401b = str;
        this.f48402c = sqliteOpenHelperFactory;
        this.f48403d = migrationContainer;
        this.f48404e = list;
        this.f48405f = z10;
        this.f48406g = journalMode;
        this.f48407h = queryExecutor;
        this.f48408i = transactionExecutor;
        this.f48409j = intent;
        this.f48410k = z11;
        this.f48411l = z12;
        this.f48412m = set;
        this.f48413n = str2;
        this.f48414o = file;
        this.f48415p = callable;
        this.f48416q = typeConverters;
        this.f48417r = autoMigrationSpecs;
        if (intent != null) {
            z13 = true;
        } else {
            z13 = false;
        }
        this.f48418s = z13;
    }

    public boolean a(int i10, int i11) {
        Set set;
        if ((i10 > i11 && this.f48411l) || !this.f48410k || ((set = this.f48412m) != null && set.contains(Integer.valueOf(i10)))) {
            return false;
        }
        return true;
    }
}
