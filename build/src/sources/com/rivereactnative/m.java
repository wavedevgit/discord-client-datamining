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
import os.j1;
import os.m0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m extends FileAssetLoader {

    /* renamed from: d  reason: collision with root package name */
    private final ReadableMap f17677d;

    /* renamed from: e  reason: collision with root package name */
    private final Function2 f17678e;

    /* renamed from: i  reason: collision with root package name */
    private final CompletableJob f17679i;

    /* renamed from: o  reason: collision with root package name */
    private final CoroutineScope f17680o;

    /* renamed from: p  reason: collision with root package name */
    private Map f17681p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f17682d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ ReadableMap f17684i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ FileAsset f17685o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(ReadableMap readableMap, FileAsset fileAsset, Continuation continuation) {
            super(2, continuation);
            this.f17684i = readableMap;
            this.f17685o = fileAsset;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(this.f17684i, this.f17685o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            wr.b.f();
            if (this.f17682d == 0) {
                kotlin.c.b(obj);
                try {
                    m.this.f17678e.invoke(this.f17684i, this.f17685o);
                } catch (Exception unused) {
                }
                return Unit.f32056a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    public m(ReadableMap referencedAssets, Function2 loadAssetHandler) {
        Intrinsics.checkNotNullParameter(referencedAssets, "referencedAssets");
        Intrinsics.checkNotNullParameter(loadAssetHandler, "loadAssetHandler");
        this.f17677d = referencedAssets;
        this.f17678e = loadAssetHandler;
        CompletableJob b10 = j1.b(null, 1, null);
        this.f17679i = b10;
        this.f17680o = kotlinx.coroutines.i.a(m0.b().Y0(b10));
        this.f17681p = new LinkedHashMap();
    }

    public final Map b() {
        return this.f17681p;
    }

    public final void dispose() {
        Job.a.a(this.f17679i, null, 1, null);
        kotlinx.coroutines.i.f(this.f17680o, null, 1, null);
        this.f17681p.clear();
    }

    @Override // app.rive.runtime.kotlin.core.FileAssetLoader
    public boolean loadContents(FileAsset asset, byte[] inBandBytes) {
        ReadableMap map;
        Intrinsics.checkNotNullParameter(asset, "asset");
        Intrinsics.checkNotNullParameter(inBandBytes, "inBandBytes");
        String i12 = StringsKt.i1(asset.getUniqueFilename(), ".", null, 2, null);
        ReadableMap map2 = this.f17677d.getMap(i12);
        if (map2 == null) {
            i12 = asset.getName();
            map2 = this.f17677d.getMap(asset.getName());
        }
        if (map2 != null && (map = map2.getMap("source")) != null) {
            os.i.d(this.f17680o, null, null, new a(map, asset, null), 3, null);
            this.f17681p.put(i12, asset);
            return true;
        }
        return false;
    }
}
