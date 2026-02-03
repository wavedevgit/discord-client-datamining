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
    public final Context f48094a;

    /* renamed from: b  reason: collision with root package name */
    public final String f48095b;

    /* renamed from: c  reason: collision with root package name */
    public final h.c f48096c;

    /* renamed from: d  reason: collision with root package name */
    public final u.e f48097d;

    /* renamed from: e  reason: collision with root package name */
    public final List f48098e;

    /* renamed from: f  reason: collision with root package name */
    public final boolean f48099f;

    /* renamed from: g  reason: collision with root package name */
    public final u.d f48100g;

    /* renamed from: h  reason: collision with root package name */
    public final Executor f48101h;

    /* renamed from: i  reason: collision with root package name */
    public final Executor f48102i;

    /* renamed from: j  reason: collision with root package name */
    public final Intent f48103j;

    /* renamed from: k  reason: collision with root package name */
    public final boolean f48104k;

    /* renamed from: l  reason: collision with root package name */
    public final boolean f48105l;

    /* renamed from: m  reason: collision with root package name */
    private final Set f48106m;

    /* renamed from: n  reason: collision with root package name */
    public final String f48107n;

    /* renamed from: o  reason: collision with root package name */
    public final File f48108o;

    /* renamed from: p  reason: collision with root package name */
    public final Callable f48109p;

    /* renamed from: q  reason: collision with root package name */
    public final List f48110q;

    /* renamed from: r  reason: collision with root package name */
    public final List f48111r;

    /* renamed from: s  reason: collision with root package name */
    public final boolean f48112s;

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
        this.f48094a = context;
        this.f48095b = str;
        this.f48096c = sqliteOpenHelperFactory;
        this.f48097d = migrationContainer;
        this.f48098e = list;
        this.f48099f = z10;
        this.f48100g = journalMode;
        this.f48101h = queryExecutor;
        this.f48102i = transactionExecutor;
        this.f48103j = intent;
        this.f48104k = z11;
        this.f48105l = z12;
        this.f48106m = set;
        this.f48107n = str2;
        this.f48108o = file;
        this.f48109p = callable;
        this.f48110q = typeConverters;
        this.f48111r = autoMigrationSpecs;
        if (intent != null) {
            z13 = true;
        } else {
            z13 = false;
        }
        this.f48112s = z13;
    }

    public boolean a(int i10, int i11) {
        Set set;
        if ((i10 > i11 && this.f48105l) || !this.f48104k || ((set = this.f48106m) != null && set.contains(Integer.valueOf(i10)))) {
            return false;
        }
        return true;
    }
}
