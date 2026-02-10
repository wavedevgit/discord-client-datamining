package com.rivereactnative;

import app.rive.runtime.kotlin.core.FileAsset;
import app.rive.runtime.kotlin.core.FileAssetLoader;
import com.facebook.react.bridge.ReadableMap;
import java.util.LinkedHashMap;
import java.util.Map;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import kotlinx.coroutines.CompletableJob;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.Job;
import ps.j1;
import ps.m0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m extends FileAssetLoader {

    /* renamed from: d  reason: collision with root package name */
    private final ReadableMap f17817d;

    /* renamed from: e  reason: collision with root package name */
    private final Function2 f17818e;

    /* renamed from: i  reason: collision with root package name */
    private final CompletableJob f17819i;

    /* renamed from: o  reason: collision with root package name */
    private final CoroutineScope f17820o;

    /* renamed from: p  reason: collision with root package name */
    private Map f17821p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f17822d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ ReadableMap f17824i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ FileAsset f17825o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(ReadableMap readableMap, FileAsset fileAsset, Continuation continuation) {
            super(2, continuation);
            this.f17824i = readableMap;
            this.f17825o = fileAsset;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(this.f17824i, this.f17825o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            xr.b.f();
            if (this.f17822d == 0) {
                kotlin.c.b(obj);
                try {
                    m.this.f17818e.invoke(this.f17824i, this.f17825o);
                } catch (Exception unused) {
                }
                return Unit.f31765a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    public m(ReadableMap referencedAssets, Function2 loadAssetHandler) {
        Intrinsics.checkNotNullParameter(referencedAssets, "referencedAssets");
        Intrinsics.checkNotNullParameter(loadAssetHandler, "loadAssetHandler");
        this.f17817d = referencedAssets;
        this.f17818e = loadAssetHandler;
        CompletableJob b10 = j1.b(null, 1, null);
        this.f17819i = b10;
        this.f17820o = kotlinx.coroutines.i.a(m0.b().V0(b10));
        this.f17821p = new LinkedHashMap();
    }

    public final Map b() {
        return this.f17821p;
    }

    public final void dispose() {
        Job.a.a(this.f17819i, null, 1, null);
        kotlinx.coroutines.i.f(this.f17820o, null, 1, null);
        this.f17821p.clear();
    }

    @Override // app.rive.runtime.kotlin.core.FileAssetLoader
    public boolean loadContents(FileAsset asset, byte[] inBandBytes) {
        ReadableMap map;
        Intrinsics.checkNotNullParameter(asset, "asset");
        Intrinsics.checkNotNullParameter(inBandBytes, "inBandBytes");
        String i12 = StringsKt.i1(asset.getUniqueFilename(), ".", null, 2, null);
        ReadableMap map2 = this.f17817d.getMap(i12);
        if (map2 == null) {
            i12 = asset.getName();
            map2 = this.f17817d.getMap(asset.getName());
        }
        if (map2 != null && (map = map2.getMap("source")) != null) {
            ps.i.d(this.f17820o, null, null, new a(map, asset, null), 3, null);
            this.f17821p.put(i12, asset);
            return true;
        }
        return false;
    }
}
