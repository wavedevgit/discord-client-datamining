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
import ys.j1;
import ys.m0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m extends FileAssetLoader {

    /* renamed from: d  reason: collision with root package name */
    private final ReadableMap f18567d;

    /* renamed from: e  reason: collision with root package name */
    private final Function2 f18568e;

    /* renamed from: i  reason: collision with root package name */
    private final CompletableJob f18569i;

    /* renamed from: o  reason: collision with root package name */
    private final CoroutineScope f18570o;

    /* renamed from: p  reason: collision with root package name */
    private Map f18571p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f18572d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ ReadableMap f18574i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ FileAsset f18575o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(ReadableMap readableMap, FileAsset fileAsset, Continuation continuation) {
            super(2, continuation);
            this.f18574i = readableMap;
            this.f18575o = fileAsset;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(this.f18574i, this.f18575o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            gs.b.f();
            if (this.f18572d == 0) {
                kotlin.c.b(obj);
                try {
                    m.this.f18568e.invoke(this.f18574i, this.f18575o);
                } catch (Exception unused) {
                }
                return Unit.f31988a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    public m(ReadableMap referencedAssets, Function2 loadAssetHandler) {
        Intrinsics.checkNotNullParameter(referencedAssets, "referencedAssets");
        Intrinsics.checkNotNullParameter(loadAssetHandler, "loadAssetHandler");
        this.f18567d = referencedAssets;
        this.f18568e = loadAssetHandler;
        CompletableJob b10 = j1.b(null, 1, null);
        this.f18569i = b10;
        this.f18570o = kotlinx.coroutines.i.a(m0.b().O0(b10));
        this.f18571p = new LinkedHashMap();
    }

    public final Map b() {
        return this.f18571p;
    }

    public final void dispose() {
        Job.a.a(this.f18569i, null, 1, null);
        kotlinx.coroutines.i.f(this.f18570o, null, 1, null);
        this.f18571p.clear();
    }

    @Override // app.rive.runtime.kotlin.core.FileAssetLoader
    public boolean loadContents(FileAsset asset, byte[] inBandBytes) {
        ReadableMap map;
        Intrinsics.checkNotNullParameter(asset, "asset");
        Intrinsics.checkNotNullParameter(inBandBytes, "inBandBytes");
        String i12 = StringsKt.i1(asset.getUniqueFilename(), ".", null, 2, null);
        ReadableMap map2 = this.f18567d.getMap(i12);
        if (map2 == null) {
            i12 = asset.getName();
            map2 = this.f18567d.getMap(asset.getName());
        }
        if (map2 != null && (map = map2.getMap("source")) != null) {
            ys.i.d(this.f18570o, null, null, new a(map, asset, null), 3, null);
            this.f18571p.put(i12, asset);
            return true;
        }
        return false;
    }
}
