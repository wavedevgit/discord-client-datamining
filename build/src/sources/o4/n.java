package o4;

import android.content.Context;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class n {

    /* renamed from: a  reason: collision with root package name */
    private final h f42417a;

    /* renamed from: b  reason: collision with root package name */
    private final c f42418b;

    /* renamed from: c  reason: collision with root package name */
    private final h f42419c;

    /* renamed from: d  reason: collision with root package name */
    private final h f42420d;

    public n(Context context, r4.b taskExecutor, h batteryChargingTracker, c batteryNotLowTracker, h networkStateTracker, h storageNotLowTracker) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(taskExecutor, "taskExecutor");
        Intrinsics.checkNotNullParameter(batteryChargingTracker, "batteryChargingTracker");
        Intrinsics.checkNotNullParameter(batteryNotLowTracker, "batteryNotLowTracker");
        Intrinsics.checkNotNullParameter(networkStateTracker, "networkStateTracker");
        Intrinsics.checkNotNullParameter(storageNotLowTracker, "storageNotLowTracker");
        this.f42417a = batteryChargingTracker;
        this.f42418b = batteryNotLowTracker;
        this.f42419c = networkStateTracker;
        this.f42420d = storageNotLowTracker;
    }

    public final h a() {
        return this.f42417a;
    }

    public final c b() {
        return this.f42418b;
    }

    public final h c() {
        return this.f42419c;
    }

    public final h d() {
        return this.f42420d;
    }

    public /* synthetic */ n(Context context, r4.b bVar, h hVar, c cVar, h hVar2, h hVar3, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        a aVar;
        c cVar2;
        h hVar4;
        l lVar;
        n nVar;
        Context context2;
        r4.b bVar2;
        if ((i10 & 4) != 0) {
            Context applicationContext = context.getApplicationContext();
            Intrinsics.checkNotNullExpressionValue(applicationContext, "context.applicationContext");
            aVar = new a(applicationContext, bVar);
        } else {
            aVar = hVar;
        }
        if ((i10 & 8) != 0) {
            Context applicationContext2 = context.getApplicationContext();
            Intrinsics.checkNotNullExpressionValue(applicationContext2, "context.applicationContext");
            cVar2 = new c(applicationContext2, bVar);
        } else {
            cVar2 = cVar;
        }
        if ((i10 & 16) != 0) {
            Context applicationContext3 = context.getApplicationContext();
            Intrinsics.checkNotNullExpressionValue(applicationContext3, "context.applicationContext");
            hVar4 = k.a(applicationContext3, bVar);
        } else {
            hVar4 = hVar2;
        }
        if ((i10 & 32) != 0) {
            Context applicationContext4 = context.getApplicationContext();
            Intrinsics.checkNotNullExpressionValue(applicationContext4, "context.applicationContext");
            lVar = new l(applicationContext4, bVar);
            context2 = context;
            bVar2 = bVar;
            nVar = this;
        } else {
            lVar = hVar3;
            nVar = this;
            context2 = context;
            bVar2 = bVar;
        }
        new n(context2, bVar2, aVar, cVar2, hVar4, lVar);
    }
}
