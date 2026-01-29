package com.swmansion.gesturehandler.react;

import android.util.SparseArray;
import cn.q;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.swmansion.gesturehandler.react.RNGestureHandlerRootHelper;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements cn.e {

    /* renamed from: d  reason: collision with root package name */
    public static final a f19087d = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final SparseArray f19088a = new SparseArray();

    /* renamed from: b  reason: collision with root package name */
    private final SparseArray f19089b = new SparseArray();

    /* renamed from: c  reason: collision with root package name */
    private final SparseArray f19090c = new SparseArray();

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

    @Override // cn.e
    public boolean a(cn.d handler, cn.d otherHandler) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        Intrinsics.checkNotNullParameter(otherHandler, "otherHandler");
        int[] iArr = (int[]) this.f19090c.get(handler.T());
        if (iArr != null) {
            for (int i10 : iArr) {
                if (i10 == otherHandler.T()) {
                    return true;
                }
            }
        }
        return false;
    }

    @Override // cn.e
    public boolean b(cn.d handler, cn.d otherHandler) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        Intrinsics.checkNotNullParameter(otherHandler, "otherHandler");
        int[] iArr = (int[]) this.f19089b.get(handler.T());
        if (iArr != null) {
            for (int i10 : iArr) {
                if (i10 == otherHandler.T()) {
                    return true;
                }
            }
        }
        return false;
    }

    @Override // cn.e
    public boolean c(cn.d handler, cn.d otherHandler) {
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

    @Override // cn.e
    public boolean d(cn.d handler, cn.d otherHandler) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        Intrinsics.checkNotNullParameter(otherHandler, "otherHandler");
        int[] iArr = (int[]) this.f19088a.get(handler.T());
        if (iArr != null) {
            for (int i10 : iArr) {
                if (i10 == otherHandler.T()) {
                    return true;
                }
            }
        }
        return false;
    }

    public final void e(cn.d handler, ReadableMap config) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        Intrinsics.checkNotNullParameter(config, "config");
        handler.A0(this);
        if (config.hasKey("waitFor")) {
            this.f19088a.put(handler.T(), f(config, "waitFor"));
        }
        if (config.hasKey("simultaneousHandlers")) {
            this.f19089b.put(handler.T(), f(config, "simultaneousHandlers"));
        }
        if (config.hasKey("blocksHandlers")) {
            this.f19090c.put(handler.T(), f(config, "blocksHandlers"));
        }
    }

    public final void g(int i10) {
        this.f19088a.remove(i10);
        this.f19089b.remove(i10);
    }

    public final void h() {
        this.f19088a.clear();
        this.f19089b.clear();
    }
}
