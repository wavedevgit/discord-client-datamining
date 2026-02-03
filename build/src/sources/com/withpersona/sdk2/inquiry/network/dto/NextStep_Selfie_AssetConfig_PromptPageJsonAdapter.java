package com.withpersona.sdk2.inquiry.network.dto;

import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.RemoteImage;
import java.lang.reflect.Constructor;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000L\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u001c\u0010\u0018\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0018\u0010\u0019R\u001e\u0010\u001b\u001a\n\u0012\u0004\u0012\u00020\u0002\u0018\u00010\u001a8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u001b\u0010\u001c¨\u0006\u001d"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep_Selfie_AssetConfig_PromptPageJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$AssetConfig$PromptPage;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$AssetConfig$PromptPage;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$AssetConfig$PromptPage;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;", "nullableRemoteImageAdapter", "Lcom/squareup/moshi/h;", "Ljava/lang/reflect/Constructor;", "constructorRef", "Ljava/lang/reflect/Constructor;", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nNextStep_Selfie_AssetConfig_PromptPageJsonAdapter.kt\nKotlin\n*S Kotlin\n*F\n+ 1 NextStep_Selfie_AssetConfig_PromptPageJsonAdapter.kt\ncom/withpersona/sdk2/inquiry/network/dto/NextStep_Selfie_AssetConfig_PromptPageJsonAdapter\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,131:1\n1#2:132\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class NextStep_Selfie_AssetConfig_PromptPageJsonAdapter extends h {
    private volatile Constructor<NextStep.Selfie.AssetConfig.PromptPage> constructorRef;
    @NotNull
    private final h nullableRemoteImageAdapter;
    @NotNull
    private final m.b options;

    public NextStep_Selfie_AssetConfig_PromptPageJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("headerPictograph", "selfiePictograph", "selfieCenterPictograph", "selfieLeftPictograph", "selfieRightPictograph");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.options = a10;
        h f10 = moshi.f(RemoteImage.class, x0.d(), "headerPictograph");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.nullableRemoteImageAdapter = f10;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(60);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("NextStep.Selfie.AssetConfig.PromptPage");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public NextStep.Selfie.AssetConfig.PromptPage fromJson(@NotNull m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.r();
        RemoteImage remoteImage = null;
        RemoteImage remoteImage2 = null;
        RemoteImage remoteImage3 = null;
        RemoteImage remoteImage4 = null;
        RemoteImage remoteImage5 = null;
        int i10 = -1;
        while (reader.hasNext()) {
            int t02 = reader.t0(this.options);
            if (t02 == -1) {
                reader.F0();
                reader.P();
            } else if (t02 == 0) {
                remoteImage = (RemoteImage) this.nullableRemoteImageAdapter.fromJson(reader);
                i10 &= -2;
            } else if (t02 == 1) {
                remoteImage2 = (RemoteImage) this.nullableRemoteImageAdapter.fromJson(reader);
                i10 &= -3;
            } else if (t02 == 2) {
                remoteImage3 = (RemoteImage) this.nullableRemoteImageAdapter.fromJson(reader);
                i10 &= -5;
            } else if (t02 == 3) {
                remoteImage4 = (RemoteImage) this.nullableRemoteImageAdapter.fromJson(reader);
                i10 &= -9;
            } else if (t02 == 4) {
                remoteImage5 = (RemoteImage) this.nullableRemoteImageAdapter.fromJson(reader);
                i10 &= -17;
            }
        }
        reader.y();
        if (i10 == -32) {
            RemoteImage remoteImage6 = remoteImage5;
            RemoteImage remoteImage7 = remoteImage4;
            return new NextStep.Selfie.AssetConfig.PromptPage(remoteImage, remoteImage2, remoteImage3, remoteImage7, remoteImage6);
        }
        RemoteImage remoteImage8 = remoteImage5;
        RemoteImage remoteImage9 = remoteImage4;
        RemoteImage remoteImage10 = remoteImage3;
        RemoteImage remoteImage11 = remoteImage2;
        RemoteImage remoteImage12 = remoteImage;
        Constructor<NextStep.Selfie.AssetConfig.PromptPage> constructor = this.constructorRef;
        if (constructor == null) {
            constructor = NextStep.Selfie.AssetConfig.PromptPage.class.getDeclaredConstructor(RemoteImage.class, RemoteImage.class, RemoteImage.class, RemoteImage.class, RemoteImage.class, Integer.TYPE, tm.c.f49935c);
            this.constructorRef = constructor;
            Intrinsics.checkNotNullExpressionValue(constructor, "also(...)");
        }
        NextStep.Selfie.AssetConfig.PromptPage newInstance = constructor.newInstance(remoteImage12, remoteImage11, remoteImage10, remoteImage9, remoteImage8, Integer.valueOf(i10), null);
        Intrinsics.checkNotNullExpressionValue(newInstance, "newInstance(...)");
        return newInstance;
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, NextStep.Selfie.AssetConfig.PromptPage promptPage) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (promptPage != null) {
            writer.l();
            writer.t0("headerPictograph");
            this.nullableRemoteImageAdapter.toJson(writer, promptPage.getHeaderPictograph());
            writer.t0("selfiePictograph");
            this.nullableRemoteImageAdapter.toJson(writer, promptPage.getSelfiePictograph());
            writer.t0("selfieCenterPictograph");
            this.nullableRemoteImageAdapter.toJson(writer, promptPage.getSelfieCenterPictograph());
            writer.t0("selfieLeftPictograph");
            this.nullableRemoteImageAdapter.toJson(writer, promptPage.getSelfieLeftPictograph());
            writer.t0("selfieRightPictograph");
            this.nullableRemoteImageAdapter.toJson(writer, promptPage.getSelfieRightPictograph());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
