package com.swmansion.gesturehandler.react;

import android.util.SparseArray;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.swmansion.gesturehandler.react.RNGestureHandlerRootHelper;
import kn.q;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements kn.e {

    /* renamed from: d  reason: collision with root package name */
    public static final a f18088d = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final SparseArray f18089a = new SparseArray();

    /* renamed from: b  reason: collision with root package name */
    private final SparseArray f18090b = new SparseArray();

    /* renamed from: c  reason: collision with root package name */
    private final SparseArray f18091c = new SparseArray();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    private final int[] f(ReadableMap readableMap, String str) {
        ReadableArray array = readableMap.getArray(str);
        Intrinsics.checkNotNull(array);
        int size = array.size();
        int[] iArr = new int[size];
        for (int i10 = 0; i10 < size; i10++) {
            iArr[i10] = array.getInt(i10);
        }
        return iArr;
    }

    @Override // kn.e
    public boolean a(kn.d handler, kn.d otherHandler) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        Intrinsics.checkNotNullParameter(otherHandler, "otherHandler");
        int[] iArr = (int[]) this.f18089a.get(handler.T());
        if (iArr != null) {
            for (int i10 : iArr) {
                if (i10 == otherHandler.T()) {
                    return true;
                }
            }
        }
        return false;
    }

    @Override // kn.e
    public boolean b(kn.d handler, kn.d otherHandler) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        Intrinsics.checkNotNullParameter(otherHandler, "otherHandler");
        int[] iArr = (int[]) this.f18090b.get(handler.T());
        if (iArr != null) {
            for (int i10 : iArr) {
                if (i10 == otherHandler.T()) {
                    return true;
                }
            }
        }
        return false;
    }

    @Override // kn.e
    public boolean c(kn.d handler, kn.d otherHandler) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        Intrinsics.checkNotNullParameter(otherHandler, "otherHandler");
        if (otherHandler instanceof q) {
            return ((q) otherHandler).X0();
        }
        if (otherHandler instanceof RNGestureHandlerRootHelper.b) {
            return true;
        }
        return false;
    }

    @Override // kn.e
    public boolean d(kn.d handler, kn.d otherHandler) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        Intrinsics.checkNotNullParameter(otherHandler, "otherHandler");
        int[] iArr = (int[]) this.f18091c.get(handler.T());
        if (iArr != null) {
            for (int i10 : iArr) {
                if (i10 == otherHandler.T()) {
                    return true;
                }
            }
        }
        return false;
    }

    public final void e(kn.d handler, ReadableMap config) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        Intrinsics.checkNotNullParameter(config, "config");
        handler.A0(this);
        if (config.hasKey("waitFor")) {
            this.f18089a.put(handler.T(), f(config, "waitFor"));
        }
        if (config.hasKey("simultaneousHandlers")) {
            this.f18090b.put(handler.T(), f(config, "simultaneousHandlers"));
        }
        if (config.hasKey("blocksHandlers")) {
            this.f18091c.put(handler.T(), f(config, "blocksHandlers"));
        }
    }

    public final void g(int i10) {
        this.f18089a.remove(i10);
        this.f18090b.remove(i10);
    }

    public final void h() {
        this.f18089a.clear();
        this.f18090b.clear();
    }
}
