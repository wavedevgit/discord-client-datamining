package androidx.room;

import android.app.Service;
import android.content.Intent;
import android.os.IBinder;
import android.os.RemoteCallbackList;
import android.os.RemoteException;
import android.util.Log;
import java.util.LinkedHashMap;
import java.util.Map;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.internal.Intrinsics;
import r3.j;
import r3.k;
@Metadata(d1 = {"\u0000B\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0006\n\u0002\u0010%\n\u0002\u0010\u000e\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0007\u0018\u00002\u00020\u0001B\u0007¢\u0006\u0004\b\u0002\u0010\u0003J\u0017\u0010\u0007\u001a\u00020\u00062\u0006\u0010\u0005\u001a\u00020\u0004H\u0016¢\u0006\u0004\b\u0007\u0010\bR\"\u0010\u000f\u001a\u00020\t8\u0000@\u0000X\u0080\u000e¢\u0006\u0012\n\u0004\b\n\u0010\u000b\u001a\u0004\b\f\u0010\r\"\u0004\b\n\u0010\u000eR&\u0010\u0016\u001a\u000e\u0012\u0004\u0012\u00020\t\u0012\u0004\u0012\u00020\u00110\u00108\u0000X\u0080\u0004¢\u0006\f\n\u0004\b\u0012\u0010\u0013\u001a\u0004\b\u0014\u0010\u0015R \u0010\u001d\u001a\b\u0012\u0004\u0012\u00020\u00180\u00178\u0000X\u0080\u0004¢\u0006\f\n\u0004\b\u0019\u0010\u001a\u001a\u0004\b\u001b\u0010\u001cR\u0014\u0010!\u001a\u00020\u001e8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001f\u0010 ¨\u0006\""}, d2 = {"Landroidx/room/MultiInstanceInvalidationService;", "Landroid/app/Service;", "<init>", "()V", "Landroid/content/Intent;", "intent", "Landroid/os/IBinder;", "onBind", "(Landroid/content/Intent;)Landroid/os/IBinder;", "", "d", "I", "c", "()I", "(I)V", "maxClientId", "", "", "e", "Ljava/util/Map;", "b", "()Ljava/util/Map;", "clientNames", "Landroid/os/RemoteCallbackList;", "Lr3/j;", "i", "Landroid/os/RemoteCallbackList;", "a", "()Landroid/os/RemoteCallbackList;", "callbackList", "Lr3/k$a;", "o", "Lr3/k$a;", "binder", "room-runtime_release"}, k = 1, mv = {1, 7, 1}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class MultiInstanceInvalidationService extends Service {

    /* renamed from: d  reason: collision with root package name */
    private int f5039d;

    /* renamed from: e  reason: collision with root package name */
    private final Map f5040e = new LinkedHashMap();

    /* renamed from: i  reason: collision with root package name */
    private final RemoteCallbackList f5041i = new b();

    /* renamed from: o  reason: collision with root package name */
    private final k.a f5042o = new a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a extends k.a {
        a() {
        }

        @Override // r3.k
        public void Q(int i10, String[] tables) {
            Intrinsics.checkNotNullParameter(tables, "tables");
            RemoteCallbackList a10 = MultiInstanceInvalidationService.this.a();
            MultiInstanceInvalidationService multiInstanceInvalidationService = MultiInstanceInvalidationService.this;
            synchronized (a10) {
                String str = (String) multiInstanceInvalidationService.b().get(Integer.valueOf(i10));
                if (str == null) {
                    Log.w("ROOM", "Remote invalidation client ID not registered");
                    return;
                }
                int beginBroadcast = multiInstanceInvalidationService.a().beginBroadcast();
                for (int i11 = 0; i11 < beginBroadcast; i11++) {
                    Object broadcastCookie = multiInstanceInvalidationService.a().getBroadcastCookie(i11);
                    Intrinsics.checkNotNull(broadcastCookie, "null cannot be cast to non-null type kotlin.Int");
                    Integer num = (Integer) broadcastCookie;
                    int intValue = num.intValue();
                    String str2 = (String) multiInstanceInvalidationService.b().get(num);
                    if (i10 != intValue && Intrinsics.areEqual(str, str2)) {
                        try {
                            ((j) multiInstanceInvalidationService.a().getBroadcastItem(i11)).m(tables);
                        } catch (RemoteException e10) {
                            Log.w("ROOM", "Error invoking a remote callback", e10);
                        }
                    }
                }
                multiInstanceInvalidationService.a().finishBroadcast();
                Unit unit = Unit.f33298a;
            }
        }

        @Override // r3.k
        public void R(j callback, int i10) {
            Intrinsics.checkNotNullParameter(callback, "callback");
            RemoteCallbackList a10 = MultiInstanceInvalidationService.this.a();
            MultiInstanceInvalidationService multiInstanceInvalidationService = MultiInstanceInvalidationService.this;
            synchronized (a10) {
                multiInstanceInvalidationService.a().unregister(callback);
                String str = (String) multiInstanceInvalidationService.b().remove(Integer.valueOf(i10));
            }
        }

        @Override // r3.k
        public int x(j callback, String str) {
            Intrinsics.checkNotNullParameter(callback, "callback");
            int i10 = 0;
            if (str == null) {
                return 0;
            }
            RemoteCallbackList a10 = MultiInstanceInvalidationService.this.a();
            MultiInstanceInvalidationService multiInstanceInvalidationService = MultiInstanceInvalidationService.this;
            synchronized (a10) {
                try {
                    multiInstanceInvalidationService.d(multiInstanceInvalidationService.c() + 1);
                    int c10 = multiInstanceInvalidationService.c();
                    if (multiInstanceInvalidationService.a().register(callback, Integer.valueOf(c10))) {
                        multiInstanceInvalidationService.b().put(Integer.valueOf(c10), str);
                        i10 = c10;
                    } else {
                        multiInstanceInvalidationService.d(multiInstanceInvalidationService.c() - 1);
                        multiInstanceInvalidationService.c();
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
            return i10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b extends RemoteCallbackList {
        b() {
        }

        @Override // android.os.RemoteCallbackList
        /* renamed from: a */
        public void onCallbackDied(j callback, Object cookie) {
            Intrinsics.checkNotNullParameter(callback, "callback");
            Intrinsics.checkNotNullParameter(cookie, "cookie");
            MultiInstanceInvalidationService.this.b().remove((Integer) cookie);
        }
    }

    public final RemoteCallbackList a() {
        return this.f5041i;
    }

    public final Map b() {
        return this.f5040e;
    }

    public final int c() {
        return this.f5039d;
    }

    public final void d(int i10) {
        this.f5039d = i10;
    }

    @Override // android.app.Service
    public IBinder onBind(Intent intent) {
        Intrinsics.checkNotNullParameter(intent, "intent");
        return this.f5042o;
    }
}
