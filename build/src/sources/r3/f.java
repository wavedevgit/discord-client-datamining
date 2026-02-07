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
    public final Context f48542a;

    /* renamed from: b  reason: collision with root package name */
    public final String f48543b;

    /* renamed from: c  reason: collision with root package name */
    public final h.c f48544c;

    /* renamed from: d  reason: collision with root package name */
    public final u.e f48545d;

    /* renamed from: e  reason: collision with root package name */
    public final List f48546e;

    /* renamed from: f  reason: collision with root package name */
    public final boolean f48547f;

    /* renamed from: g  reason: collision with root package name */
    public final u.d f48548g;

    /* renamed from: h  reason: collision with root package name */
    public final Executor f48549h;

    /* renamed from: i  reason: collision with root package name */
    public final Executor f48550i;

    /* renamed from: j  reason: collision with root package name */
    public final Intent f48551j;

    /* renamed from: k  reason: collision with root package name */
    public final boolean f48552k;

    /* renamed from: l  reason: collision with root package name */
    public final boolean f48553l;

    /* renamed from: m  reason: collision with root package name */
    private final Set f48554m;

    /* renamed from: n  reason: collision with root package name */
    public final String f48555n;

    /* renamed from: o  reason: collision with root package name */
    public final File f48556o;

    /* renamed from: p  reason: collision with root package name */
    public final Callable f48557p;

    /* renamed from: q  reason: collision with root package name */
    public final List f48558q;

    /* renamed from: r  reason: collision with root package name */
    public final List f48559r;

    /* renamed from: s  reason: collision with root package name */
    public final boolean f48560s;

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
        this.f48542a = context;
        this.f48543b = str;
        this.f48544c = sqliteOpenHelperFactory;
        this.f48545d = migrationContainer;
        this.f48546e = list;
        this.f48547f = z10;
        this.f48548g = journalMode;
        this.f48549h = queryExecutor;
        this.f48550i = transactionExecutor;
        this.f48551j = intent;
        this.f48552k = z11;
        this.f48553l = z12;
        this.f48554m = set;
        this.f48555n = str2;
        this.f48556o = file;
        this.f48557p = callable;
        this.f48558q = typeConverters;
        this.f48559r = autoMigrationSpecs;
        if (intent != null) {
            z13 = true;
        } else {
            z13 = false;
        }
        this.f48560s = z13;
    }

    public boolean a(int i10, int i11) {
        Set set;
        if ((i10 > i11 && this.f48553l) || !this.f48552k || ((set = this.f48554m) != null && set.contains(Integer.valueOf(i10)))) {
            return false;
        }
        return true;
    }
}
