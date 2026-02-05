package com.withpersona.sdk2.inquiry.network.dto;

import android.os.Parcel;
import android.os.Parcelable;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import com.squareup.moshi.f;
import com.squareup.moshi.g;
import com.squareup.moshi.h;
import com.squareup.moshi.i;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.z;
import com.withpersona.sdk2.inquiry.network.core.JsonReaderUtilsKt;
import com.withpersona.sdk2.inquiry.network.core.dto.UiComponentError;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import com.withpersona.sdk2.inquiry.network.dto.government_id.CaptureOptionNativeMobile;
import com.withpersona.sdk2.inquiry.network.dto.government_id.CapturePageConfig;
import com.withpersona.sdk2.inquiry.network.dto.government_id.Id;
import com.withpersona.sdk2.inquiry.network.dto.selfie.PoseConfig;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.RemoteImage;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.UiComponentConfig;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.enums.EnumEntries;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import or.l;
import org.jetbrains.annotations.NotNull;
import org.webrtc.MediaStreamTrack;
@Metadata(d1 = {"\u0000,\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0002\b\f\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b6\u0018\u0000 \b2\u00020\u0001:\b\b\t\n\u000b\f\r\u000e\u000fB\u0011\b\u0004\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005R\u0014\u0010\u0002\u001a\u00020\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007\u0082\u0001\u0006\u0010\u0011\u0012\u0013\u0014\u0015¨\u0006\u0016"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep;", "", StackTraceHelper.NAME_KEY, "", "<init>", "(Ljava/lang/String;)V", "getName", "()Ljava/lang/String;", "Companion", "Unknown", "Ui", "GovernmentId", "Selfie", "Document", "CancelDialog", "Complete", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Complete;", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document;", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId;", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie;", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Ui;", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Unknown;", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class NextStep {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private final String name;

    @i(generateAdapter = true)
    @Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u000b\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0007\u0018\u00002\u00020\u0001B/\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u0007\u0010\bJ\u0006\u0010\u000e\u001a\u00020\u000fJ\u0016\u0010\u0010\u001a\u00020\u00112\u0006\u0010\u0012\u001a\u00020\u00132\u0006\u0010\u0014\u001a\u00020\u000fR\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\nR\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\nR\u0013\u0010\u0005\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\nR\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\n¨\u0006\u0015"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$CancelDialog;", "Landroid/os/Parcelable;", "title", "", "prompt", "btnSubmit", "btnResume", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", "getTitle", "()Ljava/lang/String;", "getPrompt", "getBtnSubmit", "getBtnResume", "describeContents", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class CancelDialog implements Parcelable {
        @NotNull
        public static final Parcelable.Creator<CancelDialog> CREATOR = new Creator();
        private final String btnResume;
        private final String btnSubmit;
        private final String prompt;
        private final String title;

        @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Creator implements Parcelable.Creator<CancelDialog> {
            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final CancelDialog createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new CancelDialog(parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString());
            }

            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final CancelDialog[] newArray(int i10) {
                return new CancelDialog[i10];
            }
        }

        public CancelDialog(String str, String str2, String str3, String str4) {
            this.title = str;
            this.prompt = str2;
            this.btnSubmit = str3;
            this.btnResume = str4;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final String getBtnResume() {
            return this.btnResume;
        }

        public final String getBtnSubmit() {
            return this.btnSubmit;
        }

        public final String getPrompt() {
            return this.prompt;
        }

        public final String getTitle() {
            return this.title;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(@NotNull Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.title);
            dest.writeString(this.prompt);
            dest.writeString(this.btnSubmit);
            dest.writeString(this.btnResume);
        }
    }

    @Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\r\u0010\u0005\u001a\u00020\u0004¢\u0006\u0004\b\u0005\u0010\u0006¨\u0006\u0007"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Companion;", "", "<init>", "()V", "Lcom/squareup/moshi/h$e;", "createAdapter", "()Lcom/squareup/moshi/h$e;", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final h.e createAdapter() {
            xm.b e10 = xm.b.b(NextStep.class, "type").c(Unknown.INSTANCE).e(Ui.class, "ui").e(GovernmentId.class, "government_id").e(Selfie.class, "selfie").e(Document.class, "document").e(Complete.class, "complete");
            Intrinsics.checkNotNullExpressionValue(e10, "withSubtype(...)");
            return e10;
        }

        private Companion() {
        }
    }

    @i(generateAdapter = true)
    @Metadata(d1 = {"\u0000*\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0005\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0007\u0018\u00002\u00020\u00012\u00020\u0002B\u000f\u0012\u0006\u0010\u0003\u001a\u00020\u0004¢\u0006\u0004\b\u0005\u0010\u0006J\u0006\u0010\t\u001a\u00020\nJ\u0016\u0010\u000b\u001a\u00020\f2\u0006\u0010\r\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\nR\u0014\u0010\u0003\u001a\u00020\u0004X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0007\u0010\b¨\u0006\u0010"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Complete;", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep;", "Landroid/os/Parcelable;", StackTraceHelper.NAME_KEY, "", "<init>", "(Ljava/lang/String;)V", "getName", "()Ljava/lang/String;", "describeContents", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class Complete extends NextStep implements Parcelable {
        @NotNull
        public static final Parcelable.Creator<Complete> CREATOR = new Creator();
        @NotNull
        private final String name;

        @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Creator implements Parcelable.Creator<Complete> {
            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final Complete createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new Complete(parcel.readString());
            }

            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final Complete[] newArray(int i10) {
                return new Complete[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public Complete(@NotNull String name) {
            super(name, null);
            Intrinsics.checkNotNullParameter(name, "name");
            this.name = name;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // com.withpersona.sdk2.inquiry.network.dto.NextStep
        @NotNull
        public String getName() {
            return this.name;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(@NotNull Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.name);
        }
    }

    @i(generateAdapter = true)
    @Metadata(d1 = {"\u00006\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\t\b\u0007\u0018\u00002\u00020\u00012\u00020\u0002:\u0007\u0018\u0019\u001a\u001b\u001c\u001d\u001eB!\u0012\u0006\u0010\u0003\u001a\u00020\u0004\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0006\u0012\u0006\u0010\u0007\u001a\u00020\b¢\u0006\u0004\b\t\u0010\nJ\u0006\u0010\u0011\u001a\u00020\u0012J\u0016\u0010\u0013\u001a\u00020\u00142\u0006\u0010\u0015\u001a\u00020\u00162\u0006\u0010\u0017\u001a\u00020\u0012R\u0014\u0010\u0003\u001a\u00020\u0004X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\fR\u0013\u0010\u0005\u001a\u0004\u0018\u00010\u0006¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u000eR\u0011\u0010\u0007\u001a\u00020\b¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0010¨\u0006\u001f"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document;", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep;", "Landroid/os/Parcelable;", StackTraceHelper.NAME_KEY, "", "styles", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$DocumentStepStyle;", "config", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$Config;", "<init>", "(Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$DocumentStepStyle;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$Config;)V", "getName", "()Ljava/lang/String;", "getStyles", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$DocumentStepStyle;", "getConfig", "()Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$Config;", "describeContents", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "Config", "StartPage", "Localizations", "PromptPage", "PendingPage", "Pages", "AssetConfig", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class Document extends NextStep implements Parcelable {
        @NotNull
        public static final Parcelable.Creator<Document> CREATOR = new Creator();
        @NotNull
        private final Config config;
        @NotNull
        private final String name;
        private final StepStyles.DocumentStepStyle styles;

        @i(generateAdapter = true)
        @Metadata(d1 = {"\u0000@\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\n\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u00002\u00020\u0001:\u0002\u001d\u001eB\u001f\u0012\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\u000b\u0010\f\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\r\u001a\u0004\u0018\u00010\u0005HÆ\u0003J!\u0010\u000e\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005HÆ\u0001J\u0006\u0010\u000f\u001a\u00020\u0010J\u0013\u0010\u0011\u001a\u00020\u00122\b\u0010\u0013\u001a\u0004\u0018\u00010\u0014HÖ\u0003J\t\u0010\u0015\u001a\u00020\u0010HÖ\u0001J\t\u0010\u0016\u001a\u00020\u0017HÖ\u0001J\u0016\u0010\u0018\u001a\u00020\u00192\u0006\u0010\u001a\u001a\u00020\u001b2\u0006\u0010\u001c\u001a\u00020\u0010R\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\b\u0010\tR\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000b¨\u0006\u001f"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$AssetConfig;", "Landroid/os/Parcelable;", "promptPage", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$AssetConfig$PromptPage;", "pendingPage", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$AssetConfig$PendingPage;", "<init>", "(Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$AssetConfig$PromptPage;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$AssetConfig$PendingPage;)V", "getPromptPage", "()Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$AssetConfig$PromptPage;", "getPendingPage", "()Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$AssetConfig$PendingPage;", "component1", "component2", "copy", "describeContents", "", "equals", "", "other", "", "hashCode", "toString", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "PendingPage", "PromptPage", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class AssetConfig implements Parcelable {
            @NotNull
            public static final Parcelable.Creator<AssetConfig> CREATOR = new Creator();
            private final PendingPage pendingPage;
            private final PromptPage promptPage;

            @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Creator implements Parcelable.Creator<AssetConfig> {
                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final AssetConfig createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    return new AssetConfig(parcel.readInt() == 0 ? null : PromptPage.CREATOR.createFromParcel(parcel), parcel.readInt() != 0 ? PendingPage.CREATOR.createFromParcel(parcel) : null);
                }

                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final AssetConfig[] newArray(int i10) {
                    return new AssetConfig[i10];
                }
            }

            @i(generateAdapter = true)
            @Metadata(d1 = {"\u0000:\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\n\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0087\b\u0018\u00002\u00020\u0001B\u001f\u0012\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000b\u0010\n\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\u000b\u001a\u0004\u0018\u00010\u0003HÆ\u0003J!\u0010\f\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0003HÆ\u0001J\u0006\u0010\r\u001a\u00020\u000eJ\u0013\u0010\u000f\u001a\u00020\u00102\b\u0010\u0011\u001a\u0004\u0018\u00010\u0012HÖ\u0003J\t\u0010\u0013\u001a\u00020\u000eHÖ\u0001J\t\u0010\u0014\u001a\u00020\u0015HÖ\u0001J\u0016\u0010\u0016\u001a\u00020\u00172\u0006\u0010\u0018\u001a\u00020\u00192\u0006\u0010\u001a\u001a\u00020\u000eR\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0007\u0010\bR\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\b¨\u0006\u001b"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$AssetConfig$PendingPage;", "Landroid/os/Parcelable;", "headerPictograph", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;", "loadingPictograph", "<init>", "(Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;)V", "getHeaderPictograph", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;", "getLoadingPictograph", "component1", "component2", "copy", "describeContents", "", "equals", "", "other", "", "hashCode", "toString", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class PendingPage implements Parcelable {
                @NotNull
                public static final Parcelable.Creator<PendingPage> CREATOR = new Creator();
                private final RemoteImage headerPictograph;
                private final RemoteImage loadingPictograph;

                @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class Creator implements Parcelable.Creator<PendingPage> {
                    /* JADX WARN: Can't rename method to resolve collision */
                    @Override // android.os.Parcelable.Creator
                    public final PendingPage createFromParcel(Parcel parcel) {
                        Intrinsics.checkNotNullParameter(parcel, "parcel");
                        return new PendingPage(parcel.readInt() == 0 ? null : RemoteImage.CREATOR.createFromParcel(parcel), parcel.readInt() != 0 ? RemoteImage.CREATOR.createFromParcel(parcel) : null);
                    }

                    /* JADX WARN: Can't rename method to resolve collision */
                    @Override // android.os.Parcelable.Creator
                    public final PendingPage[] newArray(int i10) {
                        return new PendingPage[i10];
                    }
                }

                public PendingPage() {
                    this(null, null, 3, null);
                }

                public static /* synthetic */ PendingPage copy$default(PendingPage pendingPage, RemoteImage remoteImage, RemoteImage remoteImage2, int i10, Object obj) {
                    if ((i10 & 1) != 0) {
                        remoteImage = pendingPage.headerPictograph;
                    }
                    if ((i10 & 2) != 0) {
                        remoteImage2 = pendingPage.loadingPictograph;
                    }
                    return pendingPage.copy(remoteImage, remoteImage2);
                }

                public final RemoteImage component1() {
                    return this.headerPictograph;
                }

                public final RemoteImage component2() {
                    return this.loadingPictograph;
                }

                @NotNull
                public final PendingPage copy(RemoteImage remoteImage, RemoteImage remoteImage2) {
                    return new PendingPage(remoteImage, remoteImage2);
                }

                @Override // android.os.Parcelable
                public final int describeContents() {
                    return 0;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if (obj instanceof PendingPage) {
                        PendingPage pendingPage = (PendingPage) obj;
                        return Intrinsics.areEqual(this.headerPictograph, pendingPage.headerPictograph) && Intrinsics.areEqual(this.loadingPictograph, pendingPage.loadingPictograph);
                    }
                    return false;
                }

                public final RemoteImage getHeaderPictograph() {
                    return this.headerPictograph;
                }

                public final RemoteImage getLoadingPictograph() {
                    return this.loadingPictograph;
                }

                public int hashCode() {
                    RemoteImage remoteImage = this.headerPictograph;
                    int hashCode = (remoteImage == null ? 0 : remoteImage.hashCode()) * 31;
                    RemoteImage remoteImage2 = this.loadingPictograph;
                    return hashCode + (remoteImage2 != null ? remoteImage2.hashCode() : 0);
                }

                @NotNull
                public String toString() {
                    RemoteImage remoteImage = this.headerPictograph;
                    RemoteImage remoteImage2 = this.loadingPictograph;
                    return "PendingPage(headerPictograph=" + remoteImage + ", loadingPictograph=" + remoteImage2 + ")";
                }

                @Override // android.os.Parcelable
                public final void writeToParcel(@NotNull Parcel dest, int i10) {
                    Intrinsics.checkNotNullParameter(dest, "dest");
                    RemoteImage remoteImage = this.headerPictograph;
                    if (remoteImage == null) {
                        dest.writeInt(0);
                    } else {
                        dest.writeInt(1);
                        remoteImage.writeToParcel(dest, i10);
                    }
                    RemoteImage remoteImage2 = this.loadingPictograph;
                    if (remoteImage2 == null) {
                        dest.writeInt(0);
                        return;
                    }
                    dest.writeInt(1);
                    remoteImage2.writeToParcel(dest, i10);
                }

                public PendingPage(RemoteImage remoteImage, RemoteImage remoteImage2) {
                    this.headerPictograph = remoteImage;
                    this.loadingPictograph = remoteImage2;
                }

                public /* synthetic */ PendingPage(RemoteImage remoteImage, RemoteImage remoteImage2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                    this((i10 & 1) != 0 ? null : remoteImage, (i10 & 2) != 0 ? null : remoteImage2);
                }
            }

            @i(generateAdapter = true)
            @Metadata(d1 = {"\u0000:\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\n\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0087\b\u0018\u00002\u00020\u0001B\u001f\u0012\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000b\u0010\n\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\u000b\u001a\u0004\u0018\u00010\u0003HÆ\u0003J!\u0010\f\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0003HÆ\u0001J\u0006\u0010\r\u001a\u00020\u000eJ\u0013\u0010\u000f\u001a\u00020\u00102\b\u0010\u0011\u001a\u0004\u0018\u00010\u0012HÖ\u0003J\t\u0010\u0013\u001a\u00020\u000eHÖ\u0001J\t\u0010\u0014\u001a\u00020\u0015HÖ\u0001J\u0016\u0010\u0016\u001a\u00020\u00172\u0006\u0010\u0018\u001a\u00020\u00192\u0006\u0010\u001a\u001a\u00020\u000eR\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0007\u0010\bR\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\b¨\u0006\u001b"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$AssetConfig$PromptPage;", "Landroid/os/Parcelable;", "headerPictograph", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;", "documentPictograph", "<init>", "(Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;)V", "getHeaderPictograph", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;", "getDocumentPictograph", "component1", "component2", "copy", "describeContents", "", "equals", "", "other", "", "hashCode", "toString", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class PromptPage implements Parcelable {
                @NotNull
                public static final Parcelable.Creator<PromptPage> CREATOR = new Creator();
                private final RemoteImage documentPictograph;
                private final RemoteImage headerPictograph;

                @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class Creator implements Parcelable.Creator<PromptPage> {
                    /* JADX WARN: Can't rename method to resolve collision */
                    @Override // android.os.Parcelable.Creator
                    public final PromptPage createFromParcel(Parcel parcel) {
                        Intrinsics.checkNotNullParameter(parcel, "parcel");
                        return new PromptPage(parcel.readInt() == 0 ? null : RemoteImage.CREATOR.createFromParcel(parcel), parcel.readInt() != 0 ? RemoteImage.CREATOR.createFromParcel(parcel) : null);
                    }

                    /* JADX WARN: Can't rename method to resolve collision */
                    @Override // android.os.Parcelable.Creator
                    public final PromptPage[] newArray(int i10) {
                        return new PromptPage[i10];
                    }
                }

                public PromptPage() {
                    this(null, null, 3, null);
                }

                public static /* synthetic */ PromptPage copy$default(PromptPage promptPage, RemoteImage remoteImage, RemoteImage remoteImage2, int i10, Object obj) {
                    if ((i10 & 1) != 0) {
                        remoteImage = promptPage.headerPictograph;
                    }
                    if ((i10 & 2) != 0) {
                        remoteImage2 = promptPage.documentPictograph;
                    }
                    return promptPage.copy(remoteImage, remoteImage2);
                }

                public final RemoteImage component1() {
                    return this.headerPictograph;
                }

                public final RemoteImage component2() {
                    return this.documentPictograph;
                }

                @NotNull
                public final PromptPage copy(RemoteImage remoteImage, RemoteImage remoteImage2) {
                    return new PromptPage(remoteImage, remoteImage2);
                }

                @Override // android.os.Parcelable
                public final int describeContents() {
                    return 0;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if (obj instanceof PromptPage) {
                        PromptPage promptPage = (PromptPage) obj;
                        return Intrinsics.areEqual(this.headerPictograph, promptPage.headerPictograph) && Intrinsics.areEqual(this.documentPictograph, promptPage.documentPictograph);
                    }
                    return false;
                }

                public final RemoteImage getDocumentPictograph() {
                    return this.documentPictograph;
                }

                public final RemoteImage getHeaderPictograph() {
                    return this.headerPictograph;
                }

                public int hashCode() {
                    RemoteImage remoteImage = this.headerPictograph;
                    int hashCode = (remoteImage == null ? 0 : remoteImage.hashCode()) * 31;
                    RemoteImage remoteImage2 = this.documentPictograph;
                    return hashCode + (remoteImage2 != null ? remoteImage2.hashCode() : 0);
                }

                @NotNull
                public String toString() {
                    RemoteImage remoteImage = this.headerPictograph;
                    RemoteImage remoteImage2 = this.documentPictograph;
                    return "PromptPage(headerPictograph=" + remoteImage + ", documentPictograph=" + remoteImage2 + ")";
                }

                @Override // android.os.Parcelable
                public final void writeToParcel(@NotNull Parcel dest, int i10) {
                    Intrinsics.checkNotNullParameter(dest, "dest");
                    RemoteImage remoteImage = this.headerPictograph;
                    if (remoteImage == null) {
                        dest.writeInt(0);
                    } else {
                        dest.writeInt(1);
                        remoteImage.writeToParcel(dest, i10);
                    }
                    RemoteImage remoteImage2 = this.documentPictograph;
                    if (remoteImage2 == null) {
                        dest.writeInt(0);
                        return;
                    }
                    dest.writeInt(1);
                    remoteImage2.writeToParcel(dest, i10);
                }

                public PromptPage(RemoteImage remoteImage, RemoteImage remoteImage2) {
                    this.headerPictograph = remoteImage;
                    this.documentPictograph = remoteImage2;
                }

                public /* synthetic */ PromptPage(RemoteImage remoteImage, RemoteImage remoteImage2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                    this((i10 & 1) != 0 ? null : remoteImage, (i10 & 2) != 0 ? null : remoteImage2);
                }
            }

            public AssetConfig() {
                this(null, null, 3, null);
            }

            public static /* synthetic */ AssetConfig copy$default(AssetConfig assetConfig, PromptPage promptPage, PendingPage pendingPage, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    promptPage = assetConfig.promptPage;
                }
                if ((i10 & 2) != 0) {
                    pendingPage = assetConfig.pendingPage;
                }
                return assetConfig.copy(promptPage, pendingPage);
            }

            public final PromptPage component1() {
                return this.promptPage;
            }

            public final PendingPage component2() {
                return this.pendingPage;
            }

            @NotNull
            public final AssetConfig copy(PromptPage promptPage, PendingPage pendingPage) {
                return new AssetConfig(promptPage, pendingPage);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof AssetConfig) {
                    AssetConfig assetConfig = (AssetConfig) obj;
                    return Intrinsics.areEqual(this.promptPage, assetConfig.promptPage) && Intrinsics.areEqual(this.pendingPage, assetConfig.pendingPage);
                }
                return false;
            }

            public final PendingPage getPendingPage() {
                return this.pendingPage;
            }

            public final PromptPage getPromptPage() {
                return this.promptPage;
            }

            public int hashCode() {
                PromptPage promptPage = this.promptPage;
                int hashCode = (promptPage == null ? 0 : promptPage.hashCode()) * 31;
                PendingPage pendingPage = this.pendingPage;
                return hashCode + (pendingPage != null ? pendingPage.hashCode() : 0);
            }

            @NotNull
            public String toString() {
                PromptPage promptPage = this.promptPage;
                PendingPage pendingPage = this.pendingPage;
                return "AssetConfig(promptPage=" + promptPage + ", pendingPage=" + pendingPage + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(@NotNull Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                PromptPage promptPage = this.promptPage;
                if (promptPage == null) {
                    dest.writeInt(0);
                } else {
                    dest.writeInt(1);
                    promptPage.writeToParcel(dest, i10);
                }
                PendingPage pendingPage = this.pendingPage;
                if (pendingPage == null) {
                    dest.writeInt(0);
                    return;
                }
                dest.writeInt(1);
                pendingPage.writeToParcel(dest, i10);
            }

            public AssetConfig(PromptPage promptPage, PendingPage pendingPage) {
                this.promptPage = promptPage;
                this.pendingPage = pendingPage;
            }

            public /* synthetic */ AssetConfig(PromptPage promptPage, PendingPage pendingPage, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this((i10 & 1) != 0 ? null : promptPage, (i10 & 2) != 0 ? null : pendingPage);
            }
        }

        @i(generateAdapter = true)
        @Metadata(d1 = {"\u0000N\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0018\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0007\u0018\u00002\u00020\u0001Bk\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0006\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\b\u0012\u0006\u0010\t\u001a\u00020\n\u0012\u0006\u0010\u000b\u001a\u00020\b\u0012\u0006\u0010\f\u001a\u00020\b\u0012\u0006\u0010\r\u001a\u00020\u000e\u0012\b\u0010\u000f\u001a\u0004\u0018\u00010\u0010\u0012\b\u0010\u0011\u001a\u0004\u0018\u00010\u0012\u0012\b\u0010\u0013\u001a\u0004\u0018\u00010\u0014¢\u0006\u0004\b\u0015\u0010\u0016J\u0006\u0010+\u001a\u00020\u0006J\u0016\u0010,\u001a\u00020-2\u0006\u0010.\u001a\u00020/2\u0006\u00100\u001a\u00020\u0006R\u0015\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\n\n\u0002\u0010\u0019\u001a\u0004\b\u0017\u0010\u0018R\u0015\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\n\n\u0002\u0010\u0019\u001a\u0004\b\u001a\u0010\u0018R\u0011\u0010\u0005\u001a\u00020\u0006¢\u0006\b\n\u0000\u001a\u0004\b\u001b\u0010\u001cR\u0013\u0010\u0007\u001a\u0004\u0018\u00010\b¢\u0006\b\n\u0000\u001a\u0004\b\u001d\u0010\u001eR\u0011\u0010\t\u001a\u00020\n¢\u0006\b\n\u0000\u001a\u0004\b\u001f\u0010 R\u0011\u0010\u000b\u001a\u00020\b¢\u0006\b\n\u0000\u001a\u0004\b!\u0010\u001eR\u0011\u0010\f\u001a\u00020\b¢\u0006\b\n\u0000\u001a\u0004\b\"\u0010\u001eR\u0011\u0010\r\u001a\u00020\u000e¢\u0006\b\n\u0000\u001a\u0004\b#\u0010$R\u0013\u0010\u000f\u001a\u0004\u0018\u00010\u0010¢\u0006\b\n\u0000\u001a\u0004\b%\u0010&R\u0013\u0010\u0011\u001a\u0004\u0018\u00010\u0012¢\u0006\b\n\u0000\u001a\u0004\b'\u0010(R\u0013\u0010\u0013\u001a\u0004\u0018\u00010\u0014¢\u0006\b\n\u0000\u001a\u0004\b)\u0010*¨\u00061"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$Config;", "Landroid/os/Parcelable;", "backStepEnabled", "", "cancelButtonEnabled", "documentFileLimit", "", "documentId", "", "startPage", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$StartPage;", "fieldKeyDocument", "kind", "localizations", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$Localizations;", "pages", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$Pages;", "assets", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$AssetConfig;", "pendingPageTextVerticalPosition", "Lcom/withpersona/sdk2/inquiry/network/dto/PendingPageTextPosition;", "<init>", "(Ljava/lang/Boolean;Ljava/lang/Boolean;ILjava/lang/String;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$StartPage;Ljava/lang/String;Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$Localizations;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$Pages;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$AssetConfig;Lcom/withpersona/sdk2/inquiry/network/dto/PendingPageTextPosition;)V", "getBackStepEnabled", "()Ljava/lang/Boolean;", "Ljava/lang/Boolean;", "getCancelButtonEnabled", "getDocumentFileLimit", "()I", "getDocumentId", "()Ljava/lang/String;", "getStartPage", "()Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$StartPage;", "getFieldKeyDocument", "getKind", "getLocalizations", "()Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$Localizations;", "getPages", "()Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$Pages;", "getAssets", "()Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$AssetConfig;", "getPendingPageTextVerticalPosition", "()Lcom/withpersona/sdk2/inquiry/network/dto/PendingPageTextPosition;", "describeContents", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Config implements Parcelable {
            @NotNull
            public static final Parcelable.Creator<Config> CREATOR = new Creator();
            private final AssetConfig assets;
            private final Boolean backStepEnabled;
            private final Boolean cancelButtonEnabled;
            private final int documentFileLimit;
            private final String documentId;
            @NotNull
            private final String fieldKeyDocument;
            @NotNull
            private final String kind;
            @NotNull
            private final Localizations localizations;
            private final Pages pages;
            private final PendingPageTextPosition pendingPageTextVerticalPosition;
            @NotNull
            private final StartPage startPage;

            @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Creator implements Parcelable.Creator<Config> {
                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final Config createFromParcel(Parcel parcel) {
                    Boolean valueOf;
                    Boolean valueOf2;
                    PendingPageTextPosition pendingPageTextPosition;
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    if (parcel.readInt() == 0) {
                        valueOf = null;
                    } else {
                        valueOf = Boolean.valueOf(parcel.readInt() != 0);
                    }
                    if (parcel.readInt() == 0) {
                        pendingPageTextPosition = null;
                        valueOf2 = null;
                    } else {
                        valueOf2 = Boolean.valueOf(parcel.readInt() != 0);
                        pendingPageTextPosition = null;
                    }
                    return new Config(valueOf, valueOf2, parcel.readInt(), parcel.readString(), StartPage.valueOf(parcel.readString()), parcel.readString(), parcel.readString(), Localizations.CREATOR.createFromParcel(parcel), parcel.readInt() == 0 ? pendingPageTextPosition : Pages.CREATOR.createFromParcel(parcel), parcel.readInt() == 0 ? pendingPageTextPosition : AssetConfig.CREATOR.createFromParcel(parcel), parcel.readInt() == 0 ? pendingPageTextPosition : PendingPageTextPosition.valueOf(parcel.readString()));
                }

                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final Config[] newArray(int i10) {
                    return new Config[i10];
                }
            }

            public Config(Boolean bool, Boolean bool2, int i10, String str, @NotNull StartPage startPage, @NotNull String fieldKeyDocument, @NotNull String kind, @NotNull Localizations localizations, Pages pages, AssetConfig assetConfig, PendingPageTextPosition pendingPageTextPosition) {
                Intrinsics.checkNotNullParameter(startPage, "startPage");
                Intrinsics.checkNotNullParameter(fieldKeyDocument, "fieldKeyDocument");
                Intrinsics.checkNotNullParameter(kind, "kind");
                Intrinsics.checkNotNullParameter(localizations, "localizations");
                this.backStepEnabled = bool;
                this.cancelButtonEnabled = bool2;
                this.documentFileLimit = i10;
                this.documentId = str;
                this.startPage = startPage;
                this.fieldKeyDocument = fieldKeyDocument;
                this.kind = kind;
                this.localizations = localizations;
                this.pages = pages;
                this.assets = assetConfig;
                this.pendingPageTextVerticalPosition = pendingPageTextPosition;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public final AssetConfig getAssets() {
                return this.assets;
            }

            public final Boolean getBackStepEnabled() {
                return this.backStepEnabled;
            }

            public final Boolean getCancelButtonEnabled() {
                return this.cancelButtonEnabled;
            }

            public final int getDocumentFileLimit() {
                return this.documentFileLimit;
            }

            public final String getDocumentId() {
                return this.documentId;
            }

            @NotNull
            public final String getFieldKeyDocument() {
                return this.fieldKeyDocument;
            }

            @NotNull
            public final String getKind() {
                return this.kind;
            }

            @NotNull
            public final Localizations getLocalizations() {
                return this.localizations;
            }

            public final Pages getPages() {
                return this.pages;
            }

            public final PendingPageTextPosition getPendingPageTextVerticalPosition() {
                return this.pendingPageTextVerticalPosition;
            }

            @NotNull
            public final StartPage getStartPage() {
                return this.startPage;
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(@NotNull Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                Boolean bool = this.backStepEnabled;
                if (bool == null) {
                    dest.writeInt(0);
                } else {
                    dest.writeInt(1);
                    dest.writeInt(bool.booleanValue() ? 1 : 0);
                }
                Boolean bool2 = this.cancelButtonEnabled;
                if (bool2 == null) {
                    dest.writeInt(0);
                } else {
                    dest.writeInt(1);
                    dest.writeInt(bool2.booleanValue() ? 1 : 0);
                }
                dest.writeInt(this.documentFileLimit);
                dest.writeString(this.documentId);
                dest.writeString(this.startPage.name());
                dest.writeString(this.fieldKeyDocument);
                dest.writeString(this.kind);
                this.localizations.writeToParcel(dest, i10);
                Pages pages = this.pages;
                if (pages == null) {
                    dest.writeInt(0);
                } else {
                    dest.writeInt(1);
                    pages.writeToParcel(dest, i10);
                }
                AssetConfig assetConfig = this.assets;
                if (assetConfig == null) {
                    dest.writeInt(0);
                } else {
                    dest.writeInt(1);
                    assetConfig.writeToParcel(dest, i10);
                }
                PendingPageTextPosition pendingPageTextPosition = this.pendingPageTextVerticalPosition;
                if (pendingPageTextPosition == null) {
                    dest.writeInt(0);
                    return;
                }
                dest.writeInt(1);
                dest.writeString(pendingPageTextPosition.name());
            }
        }

        @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Creator implements Parcelable.Creator<Document> {
            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final Document createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new Document(parcel.readString(), parcel.readInt() == 0 ? null : StepStyles.DocumentStepStyle.CREATOR.createFromParcel(parcel), Config.CREATOR.createFromParcel(parcel));
            }

            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final Document[] newArray(int i10) {
                return new Document[i10];
            }
        }

        @i(generateAdapter = true)
        @Metadata(d1 = {"\u00002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0007\u0018\u00002\u00020\u0001B!\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\u0004\b\b\u0010\tJ\u0006\u0010\u0010\u001a\u00020\u0011J\u0016\u0010\u0012\u001a\u00020\u00132\u0006\u0010\u0014\u001a\u00020\u00152\u0006\u0010\u0016\u001a\u00020\u0011R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000bR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\rR\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000f¨\u0006\u0017"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$Localizations;", "Landroid/os/Parcelable;", "pendingPage", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$PendingPage;", "promptPage", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$PromptPage;", "cancelDialog", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$CancelDialog;", "<init>", "(Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$PendingPage;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$PromptPage;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$CancelDialog;)V", "getPendingPage", "()Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$PendingPage;", "getPromptPage", "()Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$PromptPage;", "getCancelDialog", "()Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$CancelDialog;", "describeContents", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Localizations implements Parcelable {
            @NotNull
            public static final Parcelable.Creator<Localizations> CREATOR = new Creator();
            private final CancelDialog cancelDialog;
            @NotNull
            private final PendingPage pendingPage;
            @NotNull
            private final PromptPage promptPage;

            @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Creator implements Parcelable.Creator<Localizations> {
                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final Localizations createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    return new Localizations(PendingPage.CREATOR.createFromParcel(parcel), PromptPage.CREATOR.createFromParcel(parcel), parcel.readInt() == 0 ? null : CancelDialog.CREATOR.createFromParcel(parcel));
                }

                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final Localizations[] newArray(int i10) {
                    return new Localizations[i10];
                }
            }

            public Localizations(@NotNull PendingPage pendingPage, @NotNull PromptPage promptPage, CancelDialog cancelDialog) {
                Intrinsics.checkNotNullParameter(pendingPage, "pendingPage");
                Intrinsics.checkNotNullParameter(promptPage, "promptPage");
                this.pendingPage = pendingPage;
                this.promptPage = promptPage;
                this.cancelDialog = cancelDialog;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public final CancelDialog getCancelDialog() {
                return this.cancelDialog;
            }

            @NotNull
            public final PendingPage getPendingPage() {
                return this.pendingPage;
            }

            @NotNull
            public final PromptPage getPromptPage() {
                return this.promptPage;
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(@NotNull Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                this.pendingPage.writeToParcel(dest, i10);
                this.promptPage.writeToParcel(dest, i10);
                CancelDialog cancelDialog = this.cancelDialog;
                if (cancelDialog == null) {
                    dest.writeInt(0);
                    return;
                }
                dest.writeInt(1);
                cancelDialog.writeToParcel(dest, i10);
            }
        }

        @i(generateAdapter = true)
        @Metadata(d1 = {"\u0000:\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\b\u0087\b\u0018\u00002\u00020\u0001:\u0003\u0018\u0019\u001aB\u0011\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u000b\u0010\b\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u0015\u0010\t\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003HÆ\u0001J\u0006\u0010\n\u001a\u00020\u000bJ\u0013\u0010\f\u001a\u00020\r2\b\u0010\u000e\u001a\u0004\u0018\u00010\u000fHÖ\u0003J\t\u0010\u0010\u001a\u00020\u000bHÖ\u0001J\t\u0010\u0011\u001a\u00020\u0012HÖ\u0001J\u0016\u0010\u0013\u001a\u00020\u00142\u0006\u0010\u0015\u001a\u00020\u00162\u0006\u0010\u0017\u001a\u00020\u000bR\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007¨\u0006\u001b"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$Pages;", "Landroid/os/Parcelable;", "document", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$Pages$DocumentPages;", "<init>", "(Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$Pages$DocumentPages;)V", "getDocument", "()Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$Pages$DocumentPages;", "component1", "copy", "describeContents", "", "equals", "", "other", "", "hashCode", "toString", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "DocumentPages", "DocumentStartPage", "UploadOptionsDialog", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Pages implements Parcelable {
            @NotNull
            public static final Parcelable.Creator<Pages> CREATOR = new Creator();
            private final DocumentPages document;

            @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Creator implements Parcelable.Creator<Pages> {
                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final Pages createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    return new Pages(parcel.readInt() == 0 ? null : DocumentPages.CREATOR.createFromParcel(parcel));
                }

                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final Pages[] newArray(int i10) {
                    return new Pages[i10];
                }
            }

            @i(generateAdapter = true)
            @Metadata(d1 = {"\u0000@\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\n\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0087\b\u0018\u00002\u00020\u0001B\u001b\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\u000b\u0010\f\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\r\u001a\u0004\u0018\u00010\u0005HÆ\u0003J!\u0010\u000e\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005HÆ\u0001J\u0006\u0010\u000f\u001a\u00020\u0010J\u0013\u0010\u0011\u001a\u00020\u00122\b\u0010\u0013\u001a\u0004\u0018\u00010\u0014HÖ\u0003J\t\u0010\u0015\u001a\u00020\u0010HÖ\u0001J\t\u0010\u0016\u001a\u00020\u0017HÖ\u0001J\u0016\u0010\u0018\u001a\u00020\u00192\u0006\u0010\u001a\u001a\u00020\u001b2\u0006\u0010\u001c\u001a\u00020\u0010R\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\b\u0010\tR\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000b¨\u0006\u001d"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$Pages$DocumentPages;", "Landroid/os/Parcelable;", "prompt", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$Pages$DocumentStartPage;", "uploadOptionsDialog", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$Pages$UploadOptionsDialog;", "<init>", "(Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$Pages$DocumentStartPage;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$Pages$UploadOptionsDialog;)V", "getPrompt", "()Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$Pages$DocumentStartPage;", "getUploadOptionsDialog", "()Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$Pages$UploadOptionsDialog;", "component1", "component2", "copy", "describeContents", "", "equals", "", "other", "", "hashCode", "toString", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class DocumentPages implements Parcelable {
                @NotNull
                public static final Parcelable.Creator<DocumentPages> CREATOR = new Creator();
                private final DocumentStartPage prompt;
                private final UploadOptionsDialog uploadOptionsDialog;

                @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class Creator implements Parcelable.Creator<DocumentPages> {
                    /* JADX WARN: Can't rename method to resolve collision */
                    @Override // android.os.Parcelable.Creator
                    public final DocumentPages createFromParcel(Parcel parcel) {
                        Intrinsics.checkNotNullParameter(parcel, "parcel");
                        return new DocumentPages(parcel.readInt() == 0 ? null : DocumentStartPage.CREATOR.createFromParcel(parcel), parcel.readInt() != 0 ? UploadOptionsDialog.CREATOR.createFromParcel(parcel) : null);
                    }

                    /* JADX WARN: Can't rename method to resolve collision */
                    @Override // android.os.Parcelable.Creator
                    public final DocumentPages[] newArray(int i10) {
                        return new DocumentPages[i10];
                    }
                }

                public DocumentPages(DocumentStartPage documentStartPage, UploadOptionsDialog uploadOptionsDialog) {
                    this.prompt = documentStartPage;
                    this.uploadOptionsDialog = uploadOptionsDialog;
                }

                public static /* synthetic */ DocumentPages copy$default(DocumentPages documentPages, DocumentStartPage documentStartPage, UploadOptionsDialog uploadOptionsDialog, int i10, Object obj) {
                    if ((i10 & 1) != 0) {
                        documentStartPage = documentPages.prompt;
                    }
                    if ((i10 & 2) != 0) {
                        uploadOptionsDialog = documentPages.uploadOptionsDialog;
                    }
                    return documentPages.copy(documentStartPage, uploadOptionsDialog);
                }

                public final DocumentStartPage component1() {
                    return this.prompt;
                }

                public final UploadOptionsDialog component2() {
                    return this.uploadOptionsDialog;
                }

                @NotNull
                public final DocumentPages copy(DocumentStartPage documentStartPage, UploadOptionsDialog uploadOptionsDialog) {
                    return new DocumentPages(documentStartPage, uploadOptionsDialog);
                }

                @Override // android.os.Parcelable
                public final int describeContents() {
                    return 0;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if (obj instanceof DocumentPages) {
                        DocumentPages documentPages = (DocumentPages) obj;
                        return Intrinsics.areEqual(this.prompt, documentPages.prompt) && Intrinsics.areEqual(this.uploadOptionsDialog, documentPages.uploadOptionsDialog);
                    }
                    return false;
                }

                public final DocumentStartPage getPrompt() {
                    return this.prompt;
                }

                public final UploadOptionsDialog getUploadOptionsDialog() {
                    return this.uploadOptionsDialog;
                }

                public int hashCode() {
                    DocumentStartPage documentStartPage = this.prompt;
                    int hashCode = (documentStartPage == null ? 0 : documentStartPage.hashCode()) * 31;
                    UploadOptionsDialog uploadOptionsDialog = this.uploadOptionsDialog;
                    return hashCode + (uploadOptionsDialog != null ? uploadOptionsDialog.hashCode() : 0);
                }

                @NotNull
                public String toString() {
                    DocumentStartPage documentStartPage = this.prompt;
                    UploadOptionsDialog uploadOptionsDialog = this.uploadOptionsDialog;
                    return "DocumentPages(prompt=" + documentStartPage + ", uploadOptionsDialog=" + uploadOptionsDialog + ")";
                }

                @Override // android.os.Parcelable
                public final void writeToParcel(@NotNull Parcel dest, int i10) {
                    Intrinsics.checkNotNullParameter(dest, "dest");
                    DocumentStartPage documentStartPage = this.prompt;
                    if (documentStartPage == null) {
                        dest.writeInt(0);
                    } else {
                        dest.writeInt(1);
                        documentStartPage.writeToParcel(dest, i10);
                    }
                    UploadOptionsDialog uploadOptionsDialog = this.uploadOptionsDialog;
                    if (uploadOptionsDialog == null) {
                        dest.writeInt(0);
                        return;
                    }
                    dest.writeInt(1);
                    uploadOptionsDialog.writeToParcel(dest, i10);
                }
            }

            @i(generateAdapter = true)
            @Metadata(d1 = {"\u0000@\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\n\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\b\u0087\b\u0018\u00002\u00020\u0001:\u0001\u001dB\u0019\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\t\u0010\f\u001a\u00020\u0003HÆ\u0003J\u000b\u0010\r\u001a\u0004\u0018\u00010\u0005HÆ\u0003J\u001f\u0010\u000e\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005HÆ\u0001J\u0006\u0010\u000f\u001a\u00020\u0010J\u0013\u0010\u0011\u001a\u00020\u00122\b\u0010\u0013\u001a\u0004\u0018\u00010\u0014HÖ\u0003J\t\u0010\u0015\u001a\u00020\u0010HÖ\u0001J\t\u0010\u0016\u001a\u00020\u0017HÖ\u0001J\u0016\u0010\u0018\u001a\u00020\u00192\u0006\u0010\u001a\u001a\u00020\u001b2\u0006\u0010\u001c\u001a\u00020\u0010R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\b\u0010\tR\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000b¨\u0006\u001e"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$Pages$DocumentStartPage;", "Landroid/os/Parcelable;", "uiStep", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Ui;", "componentNameMapping", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$Pages$DocumentStartPage$ComponentNameMapping;", "<init>", "(Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Ui;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$Pages$DocumentStartPage$ComponentNameMapping;)V", "getUiStep", "()Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Ui;", "getComponentNameMapping", "()Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$Pages$DocumentStartPage$ComponentNameMapping;", "component1", "component2", "copy", "describeContents", "", "equals", "", "other", "", "hashCode", "toString", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "ComponentNameMapping", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class DocumentStartPage implements Parcelable {
                @NotNull
                public static final Parcelable.Creator<DocumentStartPage> CREATOR = new Creator();
                private final ComponentNameMapping componentNameMapping;
                @NotNull
                private final Ui uiStep;

                @i(generateAdapter = true)
                @Metadata(d1 = {"\u00004\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0010\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0087\b\u0018\u00002\u00020\u0001B/\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u0007\u0010\bJ\u000b\u0010\u000e\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\u000f\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\u0010\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\u0011\u001a\u0004\u0018\u00010\u0003HÆ\u0003J9\u0010\u0012\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0003HÆ\u0001J\u0006\u0010\u0013\u001a\u00020\u0014J\u0013\u0010\u0015\u001a\u00020\u00162\b\u0010\u0017\u001a\u0004\u0018\u00010\u0018HÖ\u0003J\t\u0010\u0019\u001a\u00020\u0014HÖ\u0001J\t\u0010\u001a\u001a\u00020\u0003HÖ\u0001J\u0016\u0010\u001b\u001a\u00020\u001c2\u0006\u0010\u001d\u001a\u00020\u001e2\u0006\u0010\u001f\u001a\u00020\u0014R\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\nR\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\nR\u0013\u0010\u0005\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\nR\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\n¨\u0006 "}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$Pages$DocumentStartPage$ComponentNameMapping;", "Landroid/os/Parcelable;", "buttonFilePicker", "", "buttonPhotoLibrary", "buttonCamera", "buttonUploadOptions", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", "getButtonFilePicker", "()Ljava/lang/String;", "getButtonPhotoLibrary", "getButtonCamera", "getButtonUploadOptions", "component1", "component2", "component3", "component4", "copy", "describeContents", "", "equals", "", "other", "", "hashCode", "toString", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class ComponentNameMapping implements Parcelable {
                    @NotNull
                    public static final Parcelable.Creator<ComponentNameMapping> CREATOR = new Creator();
                    private final String buttonCamera;
                    private final String buttonFilePicker;
                    private final String buttonPhotoLibrary;
                    private final String buttonUploadOptions;

                    @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
                    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                    public static final class Creator implements Parcelable.Creator<ComponentNameMapping> {
                        /* JADX WARN: Can't rename method to resolve collision */
                        @Override // android.os.Parcelable.Creator
                        public final ComponentNameMapping createFromParcel(Parcel parcel) {
                            Intrinsics.checkNotNullParameter(parcel, "parcel");
                            return new ComponentNameMapping(parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString());
                        }

                        /* JADX WARN: Can't rename method to resolve collision */
                        @Override // android.os.Parcelable.Creator
                        public final ComponentNameMapping[] newArray(int i10) {
                            return new ComponentNameMapping[i10];
                        }
                    }

                    public ComponentNameMapping(String str, String str2, String str3, String str4) {
                        this.buttonFilePicker = str;
                        this.buttonPhotoLibrary = str2;
                        this.buttonCamera = str3;
                        this.buttonUploadOptions = str4;
                    }

                    public static /* synthetic */ ComponentNameMapping copy$default(ComponentNameMapping componentNameMapping, String str, String str2, String str3, String str4, int i10, Object obj) {
                        if ((i10 & 1) != 0) {
                            str = componentNameMapping.buttonFilePicker;
                        }
                        if ((i10 & 2) != 0) {
                            str2 = componentNameMapping.buttonPhotoLibrary;
                        }
                        if ((i10 & 4) != 0) {
                            str3 = componentNameMapping.buttonCamera;
                        }
                        if ((i10 & 8) != 0) {
                            str4 = componentNameMapping.buttonUploadOptions;
                        }
                        return componentNameMapping.copy(str, str2, str3, str4);
                    }

                    public final String component1() {
                        return this.buttonFilePicker;
                    }

                    public final String component2() {
                        return this.buttonPhotoLibrary;
                    }

                    public final String component3() {
                        return this.buttonCamera;
                    }

                    public final String component4() {
                        return this.buttonUploadOptions;
                    }

                    @NotNull
                    public final ComponentNameMapping copy(String str, String str2, String str3, String str4) {
                        return new ComponentNameMapping(str, str2, str3, str4);
                    }

                    @Override // android.os.Parcelable
                    public final int describeContents() {
                        return 0;
                    }

                    public boolean equals(Object obj) {
                        if (this == obj) {
                            return true;
                        }
                        if (obj instanceof ComponentNameMapping) {
                            ComponentNameMapping componentNameMapping = (ComponentNameMapping) obj;
                            return Intrinsics.areEqual(this.buttonFilePicker, componentNameMapping.buttonFilePicker) && Intrinsics.areEqual(this.buttonPhotoLibrary, componentNameMapping.buttonPhotoLibrary) && Intrinsics.areEqual(this.buttonCamera, componentNameMapping.buttonCamera) && Intrinsics.areEqual(this.buttonUploadOptions, componentNameMapping.buttonUploadOptions);
                        }
                        return false;
                    }

                    public final String getButtonCamera() {
                        return this.buttonCamera;
                    }

                    public final String getButtonFilePicker() {
                        return this.buttonFilePicker;
                    }

                    public final String getButtonPhotoLibrary() {
                        return this.buttonPhotoLibrary;
                    }

                    public final String getButtonUploadOptions() {
                        return this.buttonUploadOptions;
                    }

                    public int hashCode() {
                        String str = this.buttonFilePicker;
                        int hashCode = (str == null ? 0 : str.hashCode()) * 31;
                        String str2 = this.buttonPhotoLibrary;
                        int hashCode2 = (hashCode + (str2 == null ? 0 : str2.hashCode())) * 31;
                        String str3 = this.buttonCamera;
                        int hashCode3 = (hashCode2 + (str3 == null ? 0 : str3.hashCode())) * 31;
                        String str4 = this.buttonUploadOptions;
                        return hashCode3 + (str4 != null ? str4.hashCode() : 0);
                    }

                    @NotNull
                    public String toString() {
                        String str = this.buttonFilePicker;
                        String str2 = this.buttonPhotoLibrary;
                        String str3 = this.buttonCamera;
                        String str4 = this.buttonUploadOptions;
                        return "ComponentNameMapping(buttonFilePicker=" + str + ", buttonPhotoLibrary=" + str2 + ", buttonCamera=" + str3 + ", buttonUploadOptions=" + str4 + ")";
                    }

                    @Override // android.os.Parcelable
                    public final void writeToParcel(@NotNull Parcel dest, int i10) {
                        Intrinsics.checkNotNullParameter(dest, "dest");
                        dest.writeString(this.buttonFilePicker);
                        dest.writeString(this.buttonPhotoLibrary);
                        dest.writeString(this.buttonCamera);
                        dest.writeString(this.buttonUploadOptions);
                    }
                }

                @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class Creator implements Parcelable.Creator<DocumentStartPage> {
                    /* JADX WARN: Can't rename method to resolve collision */
                    @Override // android.os.Parcelable.Creator
                    public final DocumentStartPage createFromParcel(Parcel parcel) {
                        Intrinsics.checkNotNullParameter(parcel, "parcel");
                        return new DocumentStartPage(Ui.CREATOR.createFromParcel(parcel), parcel.readInt() == 0 ? null : ComponentNameMapping.CREATOR.createFromParcel(parcel));
                    }

                    /* JADX WARN: Can't rename method to resolve collision */
                    @Override // android.os.Parcelable.Creator
                    public final DocumentStartPage[] newArray(int i10) {
                        return new DocumentStartPage[i10];
                    }
                }

                public DocumentStartPage(@NotNull Ui uiStep, ComponentNameMapping componentNameMapping) {
                    Intrinsics.checkNotNullParameter(uiStep, "uiStep");
                    this.uiStep = uiStep;
                    this.componentNameMapping = componentNameMapping;
                }

                public static /* synthetic */ DocumentStartPage copy$default(DocumentStartPage documentStartPage, Ui ui2, ComponentNameMapping componentNameMapping, int i10, Object obj) {
                    if ((i10 & 1) != 0) {
                        ui2 = documentStartPage.uiStep;
                    }
                    if ((i10 & 2) != 0) {
                        componentNameMapping = documentStartPage.componentNameMapping;
                    }
                    return documentStartPage.copy(ui2, componentNameMapping);
                }

                @NotNull
                public final Ui component1() {
                    return this.uiStep;
                }

                public final ComponentNameMapping component2() {
                    return this.componentNameMapping;
                }

                @NotNull
                public final DocumentStartPage copy(@NotNull Ui uiStep, ComponentNameMapping componentNameMapping) {
                    Intrinsics.checkNotNullParameter(uiStep, "uiStep");
                    return new DocumentStartPage(uiStep, componentNameMapping);
                }

                @Override // android.os.Parcelable
                public final int describeContents() {
                    return 0;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if (obj instanceof DocumentStartPage) {
                        DocumentStartPage documentStartPage = (DocumentStartPage) obj;
                        return Intrinsics.areEqual(this.uiStep, documentStartPage.uiStep) && Intrinsics.areEqual(this.componentNameMapping, documentStartPage.componentNameMapping);
                    }
                    return false;
                }

                public final ComponentNameMapping getComponentNameMapping() {
                    return this.componentNameMapping;
                }

                @NotNull
                public final Ui getUiStep() {
                    return this.uiStep;
                }

                public int hashCode() {
                    int hashCode = this.uiStep.hashCode() * 31;
                    ComponentNameMapping componentNameMapping = this.componentNameMapping;
                    return hashCode + (componentNameMapping == null ? 0 : componentNameMapping.hashCode());
                }

                @NotNull
                public String toString() {
                    Ui ui2 = this.uiStep;
                    ComponentNameMapping componentNameMapping = this.componentNameMapping;
                    return "DocumentStartPage(uiStep=" + ui2 + ", componentNameMapping=" + componentNameMapping + ")";
                }

                @Override // android.os.Parcelable
                public final void writeToParcel(@NotNull Parcel dest, int i10) {
                    Intrinsics.checkNotNullParameter(dest, "dest");
                    this.uiStep.writeToParcel(dest, i10);
                    ComponentNameMapping componentNameMapping = this.componentNameMapping;
                    if (componentNameMapping == null) {
                        dest.writeInt(0);
                        return;
                    }
                    dest.writeInt(1);
                    componentNameMapping.writeToParcel(dest, i10);
                }
            }

            @i(generateAdapter = true)
            @Metadata(d1 = {"\u0000@\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\n\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\b\u0087\b\u0018\u00002\u00020\u0001:\u0001\u001dB\u0019\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\t\u0010\f\u001a\u00020\u0003HÆ\u0003J\u000b\u0010\r\u001a\u0004\u0018\u00010\u0005HÆ\u0003J\u001f\u0010\u000e\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005HÆ\u0001J\u0006\u0010\u000f\u001a\u00020\u0010J\u0013\u0010\u0011\u001a\u00020\u00122\b\u0010\u0013\u001a\u0004\u0018\u00010\u0014HÖ\u0003J\t\u0010\u0015\u001a\u00020\u0010HÖ\u0001J\t\u0010\u0016\u001a\u00020\u0017HÖ\u0001J\u0016\u0010\u0018\u001a\u00020\u00192\u0006\u0010\u001a\u001a\u00020\u001b2\u0006\u0010\u001c\u001a\u00020\u0010R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\b\u0010\tR\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000b¨\u0006\u001e"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$Pages$UploadOptionsDialog;", "Landroid/os/Parcelable;", "uiStep", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Ui;", "componentNameMapping", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$Pages$UploadOptionsDialog$ComponentNameMapping;", "<init>", "(Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Ui;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$Pages$UploadOptionsDialog$ComponentNameMapping;)V", "getUiStep", "()Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Ui;", "getComponentNameMapping", "()Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$Pages$UploadOptionsDialog$ComponentNameMapping;", "component1", "component2", "copy", "describeContents", "", "equals", "", "other", "", "hashCode", "toString", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "ComponentNameMapping", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class UploadOptionsDialog implements Parcelable {
                @NotNull
                public static final Parcelable.Creator<UploadOptionsDialog> CREATOR = new Creator();
                private final ComponentNameMapping componentNameMapping;
                @NotNull
                private final Ui uiStep;

                @i(generateAdapter = true)
                @Metadata(d1 = {"\u00004\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0010\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0087\b\u0018\u00002\u00020\u0001B/\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u0007\u0010\bJ\u000b\u0010\u000e\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\u000f\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\u0010\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\u0011\u001a\u0004\u0018\u00010\u0003HÆ\u0003J9\u0010\u0012\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0003HÆ\u0001J\u0006\u0010\u0013\u001a\u00020\u0014J\u0013\u0010\u0015\u001a\u00020\u00162\b\u0010\u0017\u001a\u0004\u0018\u00010\u0018HÖ\u0003J\t\u0010\u0019\u001a\u00020\u0014HÖ\u0001J\t\u0010\u001a\u001a\u00020\u0003HÖ\u0001J\u0016\u0010\u001b\u001a\u00020\u001c2\u0006\u0010\u001d\u001a\u00020\u001e2\u0006\u0010\u001f\u001a\u00020\u0014R\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\nR\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\nR\u0013\u0010\u0005\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\nR\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\n¨\u0006 "}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$Pages$UploadOptionsDialog$ComponentNameMapping;", "Landroid/os/Parcelable;", "buttonFilePicker", "", "buttonPhotoLibrary", "buttonCamera", "buttonCancel", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", "getButtonFilePicker", "()Ljava/lang/String;", "getButtonPhotoLibrary", "getButtonCamera", "getButtonCancel", "component1", "component2", "component3", "component4", "copy", "describeContents", "", "equals", "", "other", "", "hashCode", "toString", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class ComponentNameMapping implements Parcelable {
                    @NotNull
                    public static final Parcelable.Creator<ComponentNameMapping> CREATOR = new Creator();
                    private final String buttonCamera;
                    private final String buttonCancel;
                    private final String buttonFilePicker;
                    private final String buttonPhotoLibrary;

                    @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
                    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                    public static final class Creator implements Parcelable.Creator<ComponentNameMapping> {
                        /* JADX WARN: Can't rename method to resolve collision */
                        @Override // android.os.Parcelable.Creator
                        public final ComponentNameMapping createFromParcel(Parcel parcel) {
                            Intrinsics.checkNotNullParameter(parcel, "parcel");
                            return new ComponentNameMapping(parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString());
                        }

                        /* JADX WARN: Can't rename method to resolve collision */
                        @Override // android.os.Parcelable.Creator
                        public final ComponentNameMapping[] newArray(int i10) {
                            return new ComponentNameMapping[i10];
                        }
                    }

                    public ComponentNameMapping(String str, String str2, String str3, String str4) {
                        this.buttonFilePicker = str;
                        this.buttonPhotoLibrary = str2;
                        this.buttonCamera = str3;
                        this.buttonCancel = str4;
                    }

                    public static /* synthetic */ ComponentNameMapping copy$default(ComponentNameMapping componentNameMapping, String str, String str2, String str3, String str4, int i10, Object obj) {
                        if ((i10 & 1) != 0) {
                            str = componentNameMapping.buttonFilePicker;
                        }
                        if ((i10 & 2) != 0) {
                            str2 = componentNameMapping.buttonPhotoLibrary;
                        }
                        if ((i10 & 4) != 0) {
                            str3 = componentNameMapping.buttonCamera;
                        }
                        if ((i10 & 8) != 0) {
                            str4 = componentNameMapping.buttonCancel;
                        }
                        return componentNameMapping.copy(str, str2, str3, str4);
                    }

                    public final String component1() {
                        return this.buttonFilePicker;
                    }

                    public final String component2() {
                        return this.buttonPhotoLibrary;
                    }

                    public final String component3() {
                        return this.buttonCamera;
                    }

                    public final String component4() {
                        return this.buttonCancel;
                    }

                    @NotNull
                    public final ComponentNameMapping copy(String str, String str2, String str3, String str4) {
                        return new ComponentNameMapping(str, str2, str3, str4);
                    }

                    @Override // android.os.Parcelable
                    public final int describeContents() {
                        return 0;
                    }

                    public boolean equals(Object obj) {
                        if (this == obj) {
                            return true;
                        }
                        if (obj instanceof ComponentNameMapping) {
                            ComponentNameMapping componentNameMapping = (ComponentNameMapping) obj;
                            return Intrinsics.areEqual(this.buttonFilePicker, componentNameMapping.buttonFilePicker) && Intrinsics.areEqual(this.buttonPhotoLibrary, componentNameMapping.buttonPhotoLibrary) && Intrinsics.areEqual(this.buttonCamera, componentNameMapping.buttonCamera) && Intrinsics.areEqual(this.buttonCancel, componentNameMapping.buttonCancel);
                        }
                        return false;
                    }

                    public final String getButtonCamera() {
                        return this.buttonCamera;
                    }

                    public final String getButtonCancel() {
                        return this.buttonCancel;
                    }

                    public final String getButtonFilePicker() {
                        return this.buttonFilePicker;
                    }

                    public final String getButtonPhotoLibrary() {
                        return this.buttonPhotoLibrary;
                    }

                    public int hashCode() {
                        String str = this.buttonFilePicker;
                        int hashCode = (str == null ? 0 : str.hashCode()) * 31;
                        String str2 = this.buttonPhotoLibrary;
                        int hashCode2 = (hashCode + (str2 == null ? 0 : str2.hashCode())) * 31;
                        String str3 = this.buttonCamera;
                        int hashCode3 = (hashCode2 + (str3 == null ? 0 : str3.hashCode())) * 31;
                        String str4 = this.buttonCancel;
                        return hashCode3 + (str4 != null ? str4.hashCode() : 0);
                    }

                    @NotNull
                    public String toString() {
                        String str = this.buttonFilePicker;
                        String str2 = this.buttonPhotoLibrary;
                        String str3 = this.buttonCamera;
                        String str4 = this.buttonCancel;
                        return "ComponentNameMapping(buttonFilePicker=" + str + ", buttonPhotoLibrary=" + str2 + ", buttonCamera=" + str3 + ", buttonCancel=" + str4 + ")";
                    }

                    @Override // android.os.Parcelable
                    public final void writeToParcel(@NotNull Parcel dest, int i10) {
                        Intrinsics.checkNotNullParameter(dest, "dest");
                        dest.writeString(this.buttonFilePicker);
                        dest.writeString(this.buttonPhotoLibrary);
                        dest.writeString(this.buttonCamera);
                        dest.writeString(this.buttonCancel);
                    }
                }

                @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class Creator implements Parcelable.Creator<UploadOptionsDialog> {
                    /* JADX WARN: Can't rename method to resolve collision */
                    @Override // android.os.Parcelable.Creator
                    public final UploadOptionsDialog createFromParcel(Parcel parcel) {
                        Intrinsics.checkNotNullParameter(parcel, "parcel");
                        return new UploadOptionsDialog(Ui.CREATOR.createFromParcel(parcel), parcel.readInt() == 0 ? null : ComponentNameMapping.CREATOR.createFromParcel(parcel));
                    }

                    /* JADX WARN: Can't rename method to resolve collision */
                    @Override // android.os.Parcelable.Creator
                    public final UploadOptionsDialog[] newArray(int i10) {
                        return new UploadOptionsDialog[i10];
                    }
                }

                public UploadOptionsDialog(@NotNull Ui uiStep, ComponentNameMapping componentNameMapping) {
                    Intrinsics.checkNotNullParameter(uiStep, "uiStep");
                    this.uiStep = uiStep;
                    this.componentNameMapping = componentNameMapping;
                }

                public static /* synthetic */ UploadOptionsDialog copy$default(UploadOptionsDialog uploadOptionsDialog, Ui ui2, ComponentNameMapping componentNameMapping, int i10, Object obj) {
                    if ((i10 & 1) != 0) {
                        ui2 = uploadOptionsDialog.uiStep;
                    }
                    if ((i10 & 2) != 0) {
                        componentNameMapping = uploadOptionsDialog.componentNameMapping;
                    }
                    return uploadOptionsDialog.copy(ui2, componentNameMapping);
                }

                @NotNull
                public final Ui component1() {
                    return this.uiStep;
                }

                public final ComponentNameMapping component2() {
                    return this.componentNameMapping;
                }

                @NotNull
                public final UploadOptionsDialog copy(@NotNull Ui uiStep, ComponentNameMapping componentNameMapping) {
                    Intrinsics.checkNotNullParameter(uiStep, "uiStep");
                    return new UploadOptionsDialog(uiStep, componentNameMapping);
                }

                @Override // android.os.Parcelable
                public final int describeContents() {
                    return 0;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if (obj instanceof UploadOptionsDialog) {
                        UploadOptionsDialog uploadOptionsDialog = (UploadOptionsDialog) obj;
                        return Intrinsics.areEqual(this.uiStep, uploadOptionsDialog.uiStep) && Intrinsics.areEqual(this.componentNameMapping, uploadOptionsDialog.componentNameMapping);
                    }
                    return false;
                }

                public final ComponentNameMapping getComponentNameMapping() {
                    return this.componentNameMapping;
                }

                @NotNull
                public final Ui getUiStep() {
                    return this.uiStep;
                }

                public int hashCode() {
                    int hashCode = this.uiStep.hashCode() * 31;
                    ComponentNameMapping componentNameMapping = this.componentNameMapping;
                    return hashCode + (componentNameMapping == null ? 0 : componentNameMapping.hashCode());
                }

                @NotNull
                public String toString() {
                    Ui ui2 = this.uiStep;
                    ComponentNameMapping componentNameMapping = this.componentNameMapping;
                    return "UploadOptionsDialog(uiStep=" + ui2 + ", componentNameMapping=" + componentNameMapping + ")";
                }

                @Override // android.os.Parcelable
                public final void writeToParcel(@NotNull Parcel dest, int i10) {
                    Intrinsics.checkNotNullParameter(dest, "dest");
                    this.uiStep.writeToParcel(dest, i10);
                    ComponentNameMapping componentNameMapping = this.componentNameMapping;
                    if (componentNameMapping == null) {
                        dest.writeInt(0);
                        return;
                    }
                    dest.writeInt(1);
                    componentNameMapping.writeToParcel(dest, i10);
                }
            }

            public Pages(DocumentPages documentPages) {
                this.document = documentPages;
            }

            public static /* synthetic */ Pages copy$default(Pages pages, DocumentPages documentPages, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    documentPages = pages.document;
                }
                return pages.copy(documentPages);
            }

            public final DocumentPages component1() {
                return this.document;
            }

            @NotNull
            public final Pages copy(DocumentPages documentPages) {
                return new Pages(documentPages);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                return (obj instanceof Pages) && Intrinsics.areEqual(this.document, ((Pages) obj).document);
            }

            public final DocumentPages getDocument() {
                return this.document;
            }

            public int hashCode() {
                DocumentPages documentPages = this.document;
                if (documentPages == null) {
                    return 0;
                }
                return documentPages.hashCode();
            }

            @NotNull
            public String toString() {
                DocumentPages documentPages = this.document;
                return "Pages(document=" + documentPages + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(@NotNull Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                DocumentPages documentPages = this.document;
                if (documentPages == null) {
                    dest.writeInt(0);
                    return;
                }
                dest.writeInt(1);
                documentPages.writeToParcel(dest, i10);
            }
        }

        @i(generateAdapter = true)
        @Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0007\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0007\u0018\u00002\u00020\u0001B\u001b\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u0006\u0010\n\u001a\u00020\u000bJ\u0016\u0010\f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\u000f2\u0006\u0010\u0010\u001a\u00020\u000bR\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0007\u0010\bR\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\b¨\u0006\u0011"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$PendingPage;", "Landroid/os/Parcelable;", "title", "", "description", "<init>", "(Ljava/lang/String;Ljava/lang/String;)V", "getTitle", "()Ljava/lang/String;", "getDescription", "describeContents", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class PendingPage implements Parcelable {
            @NotNull
            public static final Parcelable.Creator<PendingPage> CREATOR = new Creator();
            private final String description;
            private final String title;

            @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Creator implements Parcelable.Creator<PendingPage> {
                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final PendingPage createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    return new PendingPage(parcel.readString(), parcel.readString());
                }

                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final PendingPage[] newArray(int i10) {
                    return new PendingPage[i10];
                }
            }

            public PendingPage(String str, String str2) {
                this.title = str;
                this.description = str2;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public final String getDescription() {
                return this.description;
            }

            public final String getTitle() {
                return this.title;
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(@NotNull Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.title);
                dest.writeString(this.description);
            }
        }

        @i(generateAdapter = true)
        @Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0019\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0007\u0018\u00002\u00020\u0001By\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\b\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\t\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0001\u0010\f\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0001\u0010\r\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u000e\u0010\u000fJ\u0006\u0010\u001c\u001a\u00020\u001dJ\u0016\u0010\u001e\u001a\u00020\u001f2\u0006\u0010 \u001a\u00020!2\u0006\u0010\"\u001a\u00020\u001dR\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u0011R\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0011R\u0013\u0010\u0005\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\u0011R\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u0011R\u0013\u0010\u0007\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u0011R\u0013\u0010\b\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0016\u0010\u0011R\u0013\u0010\t\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0017\u0010\u0011R\u0013\u0010\n\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0018\u0010\u0011R\u0013\u0010\u000b\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0019\u0010\u0011R\u0013\u0010\f\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u001a\u0010\u0011R\u0013\u0010\r\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u001b\u0010\u0011¨\u0006#"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$PromptPage;", "Landroid/os/Parcelable;", "title", "", "prompt", "disclaimer", "captureOptionsDialogTitle", "btnCapture", "btnUpload", "btnSubmit", "cameraPermissionsTitle", "cameraPermissionsPrompt", "cameraPermissionsAllowButtonText", "cameraPermissionsCancelButtonText", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", "getTitle", "()Ljava/lang/String;", "getPrompt", "getDisclaimer", "getCaptureOptionsDialogTitle", "getBtnCapture", "getBtnUpload", "getBtnSubmit", "getCameraPermissionsTitle", "getCameraPermissionsPrompt", "getCameraPermissionsAllowButtonText", "getCameraPermissionsCancelButtonText", "describeContents", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class PromptPage implements Parcelable {
            @NotNull
            public static final Parcelable.Creator<PromptPage> CREATOR = new Creator();
            private final String btnCapture;
            private final String btnSubmit;
            private final String btnUpload;
            private final String cameraPermissionsAllowButtonText;
            private final String cameraPermissionsCancelButtonText;
            private final String cameraPermissionsPrompt;
            private final String cameraPermissionsTitle;
            private final String captureOptionsDialogTitle;
            private final String disclaimer;
            private final String prompt;
            private final String title;

            @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Creator implements Parcelable.Creator<PromptPage> {
                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final PromptPage createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    return new PromptPage(parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString());
                }

                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final PromptPage[] newArray(int i10) {
                    return new PromptPage[i10];
                }
            }

            public PromptPage(String str, String str2, String str3, String str4, String str5, String str6, String str7, String str8, String str9, @g(name = "cameraPermissionsBtnContinueMobile") String str10, @g(name = "cameraPermissionsBtnCancel") String str11) {
                this.title = str;
                this.prompt = str2;
                this.disclaimer = str3;
                this.captureOptionsDialogTitle = str4;
                this.btnCapture = str5;
                this.btnUpload = str6;
                this.btnSubmit = str7;
                this.cameraPermissionsTitle = str8;
                this.cameraPermissionsPrompt = str9;
                this.cameraPermissionsAllowButtonText = str10;
                this.cameraPermissionsCancelButtonText = str11;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public final String getBtnCapture() {
                return this.btnCapture;
            }

            public final String getBtnSubmit() {
                return this.btnSubmit;
            }

            public final String getBtnUpload() {
                return this.btnUpload;
            }

            public final String getCameraPermissionsAllowButtonText() {
                return this.cameraPermissionsAllowButtonText;
            }

            public final String getCameraPermissionsCancelButtonText() {
                return this.cameraPermissionsCancelButtonText;
            }

            public final String getCameraPermissionsPrompt() {
                return this.cameraPermissionsPrompt;
            }

            public final String getCameraPermissionsTitle() {
                return this.cameraPermissionsTitle;
            }

            public final String getCaptureOptionsDialogTitle() {
                return this.captureOptionsDialogTitle;
            }

            public final String getDisclaimer() {
                return this.disclaimer;
            }

            public final String getPrompt() {
                return this.prompt;
            }

            public final String getTitle() {
                return this.title;
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(@NotNull Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.title);
                dest.writeString(this.prompt);
                dest.writeString(this.disclaimer);
                dest.writeString(this.captureOptionsDialogTitle);
                dest.writeString(this.btnCapture);
                dest.writeString(this.btnUpload);
                dest.writeString(this.btnSubmit);
                dest.writeString(this.cameraPermissionsTitle);
                dest.writeString(this.cameraPermissionsPrompt);
                dest.writeString(this.cameraPermissionsAllowButtonText);
                dest.writeString(this.cameraPermissionsCancelButtonText);
            }
        }

        /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
        /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
        @i(generateAdapter = false)
        @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0005\b\u0087\u0081\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003j\u0002\b\u0004j\u0002\b\u0005¨\u0006\u0006"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$StartPage;", "", "<init>", "(Ljava/lang/String;I)V", "PROMPT", "REVIEW", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class StartPage {
            private static final /* synthetic */ EnumEntries $ENTRIES;
            private static final /* synthetic */ StartPage[] $VALUES;
            @g(name = "prompt")
            public static final StartPage PROMPT = new StartPage("PROMPT", 0);
            @g(name = "review")
            public static final StartPage REVIEW = new StartPage("REVIEW", 1);

            private static final /* synthetic */ StartPage[] $values() {
                return new StartPage[]{PROMPT, REVIEW};
            }

            static {
                StartPage[] $values = $values();
                $VALUES = $values;
                $ENTRIES = vr.a.a($values);
            }

            private StartPage(String str, int i10) {
            }

            @NotNull
            public static EnumEntries getEntries() {
                return $ENTRIES;
            }

            public static StartPage valueOf(String str) {
                return (StartPage) Enum.valueOf(StartPage.class, str);
            }

            public static StartPage[] values() {
                return (StartPage[]) $VALUES.clone();
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public Document(@NotNull String name, StepStyles.DocumentStepStyle documentStepStyle, @NotNull Config config) {
            super(name, null);
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(config, "config");
            this.name = name;
            this.styles = documentStepStyle;
            this.config = config;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @NotNull
        public final Config getConfig() {
            return this.config;
        }

        @Override // com.withpersona.sdk2.inquiry.network.dto.NextStep
        @NotNull
        public String getName() {
            return this.name;
        }

        public final StepStyles.DocumentStepStyle getStyles() {
            return this.styles;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(@NotNull Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.name);
            StepStyles.DocumentStepStyle documentStepStyle = this.styles;
            if (documentStepStyle == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                documentStepStyle.writeToParcel(dest, i10);
            }
            this.config.writeToParcel(dest, i10);
        }
    }

    @i(generateAdapter = true)
    @Metadata(d1 = {"\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u001b\b\u0007\u0018\u00002\u00020\u0001:\u0012\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !B!\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\u0004\b\b\u0010\tR\u0014\u0010\u0002\u001a\u00020\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000bR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\rR\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000f¨\u0006\""}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId;", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep;", StackTraceHelper.NAME_KEY, "", "config", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$Config;", "styles", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$GovernmentIdStepStyle;", "<init>", "(Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$Config;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$GovernmentIdStepStyle;)V", "getName", "()Ljava/lang/String;", "getConfig", "()Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$Config;", "getStyles", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$GovernmentIdStepStyle;", "Config", "DigitalIdConfig", "DigitalIdRequest", "LocalizationOverride", "Localizations", "SelectPage", "PromptPage", "CapturePage", "CheckPage", "PendingPage", "RequestPage", "ReviewUploadPage", "AutoClassificationPage", "PassportNfcOption", "CaptureFileType", "VideoCaptureMethod", "AssetConfig", "AutoClassificationConfig", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class GovernmentId extends NextStep {
        @NotNull
        private final Config config;
        @NotNull
        private final String name;
        private final StepStyles.GovernmentIdStepStyle styles;

        @i(generateAdapter = true)
        @Metadata(d1 = {"\u0000R\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0013\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0007\b\u0087\b\u0018\u00002\u00020\u0001:\u0005,-./0BC\u0012\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\t\u0012\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u000b¢\u0006\u0004\b\f\u0010\rJ\u000b\u0010\u0018\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\u0019\u001a\u0004\u0018\u00010\u0005HÆ\u0003J\u000b\u0010\u001a\u001a\u0004\u0018\u00010\u0007HÆ\u0003J\u000b\u0010\u001b\u001a\u0004\u0018\u00010\tHÆ\u0003J\u000b\u0010\u001c\u001a\u0004\u0018\u00010\u000bHÆ\u0003JE\u0010\u001d\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u00052\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u00072\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\t2\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u000bHÆ\u0001J\u0006\u0010\u001e\u001a\u00020\u001fJ\u0013\u0010 \u001a\u00020!2\b\u0010\"\u001a\u0004\u0018\u00010#HÖ\u0003J\t\u0010$\u001a\u00020\u001fHÖ\u0001J\t\u0010%\u001a\u00020&HÖ\u0001J\u0016\u0010'\u001a\u00020(2\u0006\u0010)\u001a\u00020*2\u0006\u0010+\u001a\u00020\u001fR\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000fR\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u0011R\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0013R\u0013\u0010\b\u001a\u0004\u0018\u00010\t¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u0015R\u0013\u0010\n\u001a\u0004\u0018\u00010\u000b¢\u0006\b\n\u0000\u001a\u0004\b\u0016\u0010\u0017¨\u00061"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$AssetConfig;", "Landroid/os/Parcelable;", "selectPage", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$AssetConfig$SelectPage;", "promptPage", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$AssetConfig$PromptPage;", "capturePage", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$AssetConfig$CapturePage;", "checkPage", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$AssetConfig$CheckPage;", "pendingPage", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$AssetConfig$PendingPage;", "<init>", "(Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$AssetConfig$SelectPage;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$AssetConfig$PromptPage;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$AssetConfig$CapturePage;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$AssetConfig$CheckPage;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$AssetConfig$PendingPage;)V", "getSelectPage", "()Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$AssetConfig$SelectPage;", "getPromptPage", "()Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$AssetConfig$PromptPage;", "getCapturePage", "()Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$AssetConfig$CapturePage;", "getCheckPage", "()Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$AssetConfig$CheckPage;", "getPendingPage", "()Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$AssetConfig$PendingPage;", "component1", "component2", "component3", "component4", "component5", "copy", "describeContents", "", "equals", "", "other", "", "hashCode", "toString", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "CapturePage", "CheckPage", "PendingPage", "PromptPage", "SelectPage", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class AssetConfig implements Parcelable {
            @NotNull
            public static final Parcelable.Creator<AssetConfig> CREATOR = new Creator();
            private final CapturePage capturePage;
            private final CheckPage checkPage;
            private final PendingPage pendingPage;
            private final PromptPage promptPage;
            private final SelectPage selectPage;

            @i(generateAdapter = true)
            @Metadata(d1 = {"\u0000:\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u001c\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0087\b\u0018\u00002\u00020\u0001Bg\u0012\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u000b\u0010\fJ\u000b\u0010\u0016\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\u0017\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\u0018\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\u0019\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\u001a\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\u001b\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\u001c\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\u001d\u001a\u0004\u0018\u00010\u0003HÆ\u0003Ji\u0010\u001e\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u0003HÆ\u0001J\u0006\u0010\u001f\u001a\u00020 J\u0013\u0010!\u001a\u00020\"2\b\u0010#\u001a\u0004\u0018\u00010$HÖ\u0003J\t\u0010%\u001a\u00020 HÖ\u0001J\t\u0010&\u001a\u00020'HÖ\u0001J\u0016\u0010(\u001a\u00020)2\u0006\u0010*\u001a\u00020+2\u0006\u0010,\u001a\u00020 R\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u000eR\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u000eR\u0013\u0010\u0005\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u000eR\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u000eR\u0013\u0010\u0007\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u000eR\u0013\u0010\b\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\u000eR\u0013\u0010\t\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u000eR\u0013\u0010\n\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u000e¨\u0006-"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$AssetConfig$CapturePage;", "Landroid/os/Parcelable;", "idFrontPictograph", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;", "idBackPictograph", "barcodePdf417Pictograph", "passportFrontPictograph", "passportSignaturePictograph", "idFrontHelpModalPictograph", "idBackHelpModalPictograph", "barcodeHelpModalPictograph", "<init>", "(Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;)V", "getIdFrontPictograph", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;", "getIdBackPictograph", "getBarcodePdf417Pictograph", "getPassportFrontPictograph", "getPassportSignaturePictograph", "getIdFrontHelpModalPictograph", "getIdBackHelpModalPictograph", "getBarcodeHelpModalPictograph", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "copy", "describeContents", "", "equals", "", "other", "", "hashCode", "toString", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class CapturePage implements Parcelable {
                @NotNull
                public static final Parcelable.Creator<CapturePage> CREATOR = new Creator();
                private final RemoteImage barcodeHelpModalPictograph;
                private final RemoteImage barcodePdf417Pictograph;
                private final RemoteImage idBackHelpModalPictograph;
                private final RemoteImage idBackPictograph;
                private final RemoteImage idFrontHelpModalPictograph;
                private final RemoteImage idFrontPictograph;
                private final RemoteImage passportFrontPictograph;
                private final RemoteImage passportSignaturePictograph;

                @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class Creator implements Parcelable.Creator<CapturePage> {
                    /* JADX WARN: Can't rename method to resolve collision */
                    @Override // android.os.Parcelable.Creator
                    public final CapturePage createFromParcel(Parcel parcel) {
                        Intrinsics.checkNotNullParameter(parcel, "parcel");
                        return new CapturePage(parcel.readInt() == 0 ? null : RemoteImage.CREATOR.createFromParcel(parcel), parcel.readInt() == 0 ? null : RemoteImage.CREATOR.createFromParcel(parcel), parcel.readInt() == 0 ? null : RemoteImage.CREATOR.createFromParcel(parcel), parcel.readInt() == 0 ? null : RemoteImage.CREATOR.createFromParcel(parcel), parcel.readInt() == 0 ? null : RemoteImage.CREATOR.createFromParcel(parcel), parcel.readInt() == 0 ? null : RemoteImage.CREATOR.createFromParcel(parcel), parcel.readInt() == 0 ? null : RemoteImage.CREATOR.createFromParcel(parcel), parcel.readInt() != 0 ? RemoteImage.CREATOR.createFromParcel(parcel) : null);
                    }

                    /* JADX WARN: Can't rename method to resolve collision */
                    @Override // android.os.Parcelable.Creator
                    public final CapturePage[] newArray(int i10) {
                        return new CapturePage[i10];
                    }
                }

                public CapturePage() {
                    this(null, null, null, null, null, null, null, null, SetSpanOperation.SPAN_MAX_PRIORITY, null);
                }

                public static /* synthetic */ CapturePage copy$default(CapturePage capturePage, RemoteImage remoteImage, RemoteImage remoteImage2, RemoteImage remoteImage3, RemoteImage remoteImage4, RemoteImage remoteImage5, RemoteImage remoteImage6, RemoteImage remoteImage7, RemoteImage remoteImage8, int i10, Object obj) {
                    if ((i10 & 1) != 0) {
                        remoteImage = capturePage.idFrontPictograph;
                    }
                    if ((i10 & 2) != 0) {
                        remoteImage2 = capturePage.idBackPictograph;
                    }
                    if ((i10 & 4) != 0) {
                        remoteImage3 = capturePage.barcodePdf417Pictograph;
                    }
                    if ((i10 & 8) != 0) {
                        remoteImage4 = capturePage.passportFrontPictograph;
                    }
                    if ((i10 & 16) != 0) {
                        remoteImage5 = capturePage.passportSignaturePictograph;
                    }
                    if ((i10 & 32) != 0) {
                        remoteImage6 = capturePage.idFrontHelpModalPictograph;
                    }
                    if ((i10 & 64) != 0) {
                        remoteImage7 = capturePage.idBackHelpModalPictograph;
                    }
                    if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                        remoteImage8 = capturePage.barcodeHelpModalPictograph;
                    }
                    RemoteImage remoteImage9 = remoteImage7;
                    RemoteImage remoteImage10 = remoteImage8;
                    RemoteImage remoteImage11 = remoteImage5;
                    RemoteImage remoteImage12 = remoteImage6;
                    return capturePage.copy(remoteImage, remoteImage2, remoteImage3, remoteImage4, remoteImage11, remoteImage12, remoteImage9, remoteImage10);
                }

                public final RemoteImage component1() {
                    return this.idFrontPictograph;
                }

                public final RemoteImage component2() {
                    return this.idBackPictograph;
                }

                public final RemoteImage component3() {
                    return this.barcodePdf417Pictograph;
                }

                public final RemoteImage component4() {
                    return this.passportFrontPictograph;
                }

                public final RemoteImage component5() {
                    return this.passportSignaturePictograph;
                }

                public final RemoteImage component6() {
                    return this.idFrontHelpModalPictograph;
                }

                public final RemoteImage component7() {
                    return this.idBackHelpModalPictograph;
                }

                public final RemoteImage component8() {
                    return this.barcodeHelpModalPictograph;
                }

                @NotNull
                public final CapturePage copy(RemoteImage remoteImage, RemoteImage remoteImage2, RemoteImage remoteImage3, RemoteImage remoteImage4, RemoteImage remoteImage5, RemoteImage remoteImage6, RemoteImage remoteImage7, RemoteImage remoteImage8) {
                    return new CapturePage(remoteImage, remoteImage2, remoteImage3, remoteImage4, remoteImage5, remoteImage6, remoteImage7, remoteImage8);
                }

                @Override // android.os.Parcelable
                public final int describeContents() {
                    return 0;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if (obj instanceof CapturePage) {
                        CapturePage capturePage = (CapturePage) obj;
                        return Intrinsics.areEqual(this.idFrontPictograph, capturePage.idFrontPictograph) && Intrinsics.areEqual(this.idBackPictograph, capturePage.idBackPictograph) && Intrinsics.areEqual(this.barcodePdf417Pictograph, capturePage.barcodePdf417Pictograph) && Intrinsics.areEqual(this.passportFrontPictograph, capturePage.passportFrontPictograph) && Intrinsics.areEqual(this.passportSignaturePictograph, capturePage.passportSignaturePictograph) && Intrinsics.areEqual(this.idFrontHelpModalPictograph, capturePage.idFrontHelpModalPictograph) && Intrinsics.areEqual(this.idBackHelpModalPictograph, capturePage.idBackHelpModalPictograph) && Intrinsics.areEqual(this.barcodeHelpModalPictograph, capturePage.barcodeHelpModalPictograph);
                    }
                    return false;
                }

                public final RemoteImage getBarcodeHelpModalPictograph() {
                    return this.barcodeHelpModalPictograph;
                }

                public final RemoteImage getBarcodePdf417Pictograph() {
                    return this.barcodePdf417Pictograph;
                }

                public final RemoteImage getIdBackHelpModalPictograph() {
                    return this.idBackHelpModalPictograph;
                }

                public final RemoteImage getIdBackPictograph() {
                    return this.idBackPictograph;
                }

                public final RemoteImage getIdFrontHelpModalPictograph() {
                    return this.idFrontHelpModalPictograph;
                }

                public final RemoteImage getIdFrontPictograph() {
                    return this.idFrontPictograph;
                }

                public final RemoteImage getPassportFrontPictograph() {
                    return this.passportFrontPictograph;
                }

                public final RemoteImage getPassportSignaturePictograph() {
                    return this.passportSignaturePictograph;
                }

                public int hashCode() {
                    RemoteImage remoteImage = this.idFrontPictograph;
                    int hashCode = (remoteImage == null ? 0 : remoteImage.hashCode()) * 31;
                    RemoteImage remoteImage2 = this.idBackPictograph;
                    int hashCode2 = (hashCode + (remoteImage2 == null ? 0 : remoteImage2.hashCode())) * 31;
                    RemoteImage remoteImage3 = this.barcodePdf417Pictograph;
                    int hashCode3 = (hashCode2 + (remoteImage3 == null ? 0 : remoteImage3.hashCode())) * 31;
                    RemoteImage remoteImage4 = this.passportFrontPictograph;
                    int hashCode4 = (hashCode3 + (remoteImage4 == null ? 0 : remoteImage4.hashCode())) * 31;
                    RemoteImage remoteImage5 = this.passportSignaturePictograph;
                    int hashCode5 = (hashCode4 + (remoteImage5 == null ? 0 : remoteImage5.hashCode())) * 31;
                    RemoteImage remoteImage6 = this.idFrontHelpModalPictograph;
                    int hashCode6 = (hashCode5 + (remoteImage6 == null ? 0 : remoteImage6.hashCode())) * 31;
                    RemoteImage remoteImage7 = this.idBackHelpModalPictograph;
                    int hashCode7 = (hashCode6 + (remoteImage7 == null ? 0 : remoteImage7.hashCode())) * 31;
                    RemoteImage remoteImage8 = this.barcodeHelpModalPictograph;
                    return hashCode7 + (remoteImage8 != null ? remoteImage8.hashCode() : 0);
                }

                @NotNull
                public String toString() {
                    RemoteImage remoteImage = this.idFrontPictograph;
                    RemoteImage remoteImage2 = this.idBackPictograph;
                    RemoteImage remoteImage3 = this.barcodePdf417Pictograph;
                    RemoteImage remoteImage4 = this.passportFrontPictograph;
                    RemoteImage remoteImage5 = this.passportSignaturePictograph;
                    RemoteImage remoteImage6 = this.idFrontHelpModalPictograph;
                    RemoteImage remoteImage7 = this.idBackHelpModalPictograph;
                    RemoteImage remoteImage8 = this.barcodeHelpModalPictograph;
                    return "CapturePage(idFrontPictograph=" + remoteImage + ", idBackPictograph=" + remoteImage2 + ", barcodePdf417Pictograph=" + remoteImage3 + ", passportFrontPictograph=" + remoteImage4 + ", passportSignaturePictograph=" + remoteImage5 + ", idFrontHelpModalPictograph=" + remoteImage6 + ", idBackHelpModalPictograph=" + remoteImage7 + ", barcodeHelpModalPictograph=" + remoteImage8 + ")";
                }

                @Override // android.os.Parcelable
                public final void writeToParcel(@NotNull Parcel dest, int i10) {
                    Intrinsics.checkNotNullParameter(dest, "dest");
                    RemoteImage remoteImage = this.idFrontPictograph;
                    if (remoteImage == null) {
                        dest.writeInt(0);
                    } else {
                        dest.writeInt(1);
                        remoteImage.writeToParcel(dest, i10);
                    }
                    RemoteImage remoteImage2 = this.idBackPictograph;
                    if (remoteImage2 == null) {
                        dest.writeInt(0);
                    } else {
                        dest.writeInt(1);
                        remoteImage2.writeToParcel(dest, i10);
                    }
                    RemoteImage remoteImage3 = this.barcodePdf417Pictograph;
                    if (remoteImage3 == null) {
                        dest.writeInt(0);
                    } else {
                        dest.writeInt(1);
                        remoteImage3.writeToParcel(dest, i10);
                    }
                    RemoteImage remoteImage4 = this.passportFrontPictograph;
                    if (remoteImage4 == null) {
                        dest.writeInt(0);
                    } else {
                        dest.writeInt(1);
                        remoteImage4.writeToParcel(dest, i10);
                    }
                    RemoteImage remoteImage5 = this.passportSignaturePictograph;
                    if (remoteImage5 == null) {
                        dest.writeInt(0);
                    } else {
                        dest.writeInt(1);
                        remoteImage5.writeToParcel(dest, i10);
                    }
                    RemoteImage remoteImage6 = this.idFrontHelpModalPictograph;
                    if (remoteImage6 == null) {
                        dest.writeInt(0);
                    } else {
                        dest.writeInt(1);
                        remoteImage6.writeToParcel(dest, i10);
                    }
                    RemoteImage remoteImage7 = this.idBackHelpModalPictograph;
                    if (remoteImage7 == null) {
                        dest.writeInt(0);
                    } else {
                        dest.writeInt(1);
                        remoteImage7.writeToParcel(dest, i10);
                    }
                    RemoteImage remoteImage8 = this.barcodeHelpModalPictograph;
                    if (remoteImage8 == null) {
                        dest.writeInt(0);
                        return;
                    }
                    dest.writeInt(1);
                    remoteImage8.writeToParcel(dest, i10);
                }

                public CapturePage(RemoteImage remoteImage, RemoteImage remoteImage2, RemoteImage remoteImage3, RemoteImage remoteImage4, RemoteImage remoteImage5, RemoteImage remoteImage6, RemoteImage remoteImage7, RemoteImage remoteImage8) {
                    this.idFrontPictograph = remoteImage;
                    this.idBackPictograph = remoteImage2;
                    this.barcodePdf417Pictograph = remoteImage3;
                    this.passportFrontPictograph = remoteImage4;
                    this.passportSignaturePictograph = remoteImage5;
                    this.idFrontHelpModalPictograph = remoteImage6;
                    this.idBackHelpModalPictograph = remoteImage7;
                    this.barcodeHelpModalPictograph = remoteImage8;
                }

                public /* synthetic */ CapturePage(RemoteImage remoteImage, RemoteImage remoteImage2, RemoteImage remoteImage3, RemoteImage remoteImage4, RemoteImage remoteImage5, RemoteImage remoteImage6, RemoteImage remoteImage7, RemoteImage remoteImage8, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                    this((i10 & 1) != 0 ? null : remoteImage, (i10 & 2) != 0 ? null : remoteImage2, (i10 & 4) != 0 ? null : remoteImage3, (i10 & 8) != 0 ? null : remoteImage4, (i10 & 16) != 0 ? null : remoteImage5, (i10 & 32) != 0 ? null : remoteImage6, (i10 & 64) != 0 ? null : remoteImage7, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : remoteImage8);
                }
            }

            @i(generateAdapter = true)
            @Metadata(d1 = {"\u0000:\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0087\b\u0018\u00002\u00020\u0001B\u0013\u0012\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u000b\u0010\b\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u0015\u0010\t\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003HÆ\u0001J\u0006\u0010\n\u001a\u00020\u000bJ\u0013\u0010\f\u001a\u00020\r2\b\u0010\u000e\u001a\u0004\u0018\u00010\u000fHÖ\u0003J\t\u0010\u0010\u001a\u00020\u000bHÖ\u0001J\t\u0010\u0011\u001a\u00020\u0012HÖ\u0001J\u0016\u0010\u0013\u001a\u00020\u00142\u0006\u0010\u0015\u001a\u00020\u00162\u0006\u0010\u0017\u001a\u00020\u000bR\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007¨\u0006\u0018"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$AssetConfig$CheckPage;", "Landroid/os/Parcelable;", "iconFile", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;", "<init>", "(Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;)V", "getIconFile", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;", "component1", "copy", "describeContents", "", "equals", "", "other", "", "hashCode", "toString", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class CheckPage implements Parcelable {
                @NotNull
                public static final Parcelable.Creator<CheckPage> CREATOR = new Creator();
                private final RemoteImage iconFile;

                @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class Creator implements Parcelable.Creator<CheckPage> {
                    /* JADX WARN: Can't rename method to resolve collision */
                    @Override // android.os.Parcelable.Creator
                    public final CheckPage createFromParcel(Parcel parcel) {
                        Intrinsics.checkNotNullParameter(parcel, "parcel");
                        return new CheckPage(parcel.readInt() == 0 ? null : RemoteImage.CREATOR.createFromParcel(parcel));
                    }

                    /* JADX WARN: Can't rename method to resolve collision */
                    @Override // android.os.Parcelable.Creator
                    public final CheckPage[] newArray(int i10) {
                        return new CheckPage[i10];
                    }
                }

                public CheckPage() {
                    this(null, 1, null);
                }

                public static /* synthetic */ CheckPage copy$default(CheckPage checkPage, RemoteImage remoteImage, int i10, Object obj) {
                    if ((i10 & 1) != 0) {
                        remoteImage = checkPage.iconFile;
                    }
                    return checkPage.copy(remoteImage);
                }

                public final RemoteImage component1() {
                    return this.iconFile;
                }

                @NotNull
                public final CheckPage copy(RemoteImage remoteImage) {
                    return new CheckPage(remoteImage);
                }

                @Override // android.os.Parcelable
                public final int describeContents() {
                    return 0;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    return (obj instanceof CheckPage) && Intrinsics.areEqual(this.iconFile, ((CheckPage) obj).iconFile);
                }

                public final RemoteImage getIconFile() {
                    return this.iconFile;
                }

                public int hashCode() {
                    RemoteImage remoteImage = this.iconFile;
                    if (remoteImage == null) {
                        return 0;
                    }
                    return remoteImage.hashCode();
                }

                @NotNull
                public String toString() {
                    RemoteImage remoteImage = this.iconFile;
                    return "CheckPage(iconFile=" + remoteImage + ")";
                }

                @Override // android.os.Parcelable
                public final void writeToParcel(@NotNull Parcel dest, int i10) {
                    Intrinsics.checkNotNullParameter(dest, "dest");
                    RemoteImage remoteImage = this.iconFile;
                    if (remoteImage == null) {
                        dest.writeInt(0);
                        return;
                    }
                    dest.writeInt(1);
                    remoteImage.writeToParcel(dest, i10);
                }

                public CheckPage(RemoteImage remoteImage) {
                    this.iconFile = remoteImage;
                }

                public /* synthetic */ CheckPage(RemoteImage remoteImage, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                    this((i10 & 1) != 0 ? null : remoteImage);
                }
            }

            @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Creator implements Parcelable.Creator<AssetConfig> {
                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final AssetConfig createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    return new AssetConfig(parcel.readInt() == 0 ? null : SelectPage.CREATOR.createFromParcel(parcel), parcel.readInt() == 0 ? null : PromptPage.CREATOR.createFromParcel(parcel), parcel.readInt() == 0 ? null : CapturePage.CREATOR.createFromParcel(parcel), parcel.readInt() == 0 ? null : CheckPage.CREATOR.createFromParcel(parcel), parcel.readInt() != 0 ? PendingPage.CREATOR.createFromParcel(parcel) : null);
                }

                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final AssetConfig[] newArray(int i10) {
                    return new AssetConfig[i10];
                }
            }

            @i(generateAdapter = true)
            @Metadata(d1 = {"\u0000:\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\n\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0087\b\u0018\u00002\u00020\u0001B\u001f\u0012\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000b\u0010\n\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\u000b\u001a\u0004\u0018\u00010\u0003HÆ\u0003J!\u0010\f\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0003HÆ\u0001J\u0006\u0010\r\u001a\u00020\u000eJ\u0013\u0010\u000f\u001a\u00020\u00102\b\u0010\u0011\u001a\u0004\u0018\u00010\u0012HÖ\u0003J\t\u0010\u0013\u001a\u00020\u000eHÖ\u0001J\t\u0010\u0014\u001a\u00020\u0015HÖ\u0001J\u0016\u0010\u0016\u001a\u00020\u00172\u0006\u0010\u0018\u001a\u00020\u00192\u0006\u0010\u001a\u001a\u00020\u000eR\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0007\u0010\bR\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\b¨\u0006\u001b"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$AssetConfig$PendingPage;", "Landroid/os/Parcelable;", "headerPictograph", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;", "loadingPictograph", "<init>", "(Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;)V", "getHeaderPictograph", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;", "getLoadingPictograph", "component1", "component2", "copy", "describeContents", "", "equals", "", "other", "", "hashCode", "toString", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class PendingPage implements Parcelable {
                @NotNull
                public static final Parcelable.Creator<PendingPage> CREATOR = new Creator();
                private final RemoteImage headerPictograph;
                private final RemoteImage loadingPictograph;

                @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class Creator implements Parcelable.Creator<PendingPage> {
                    /* JADX WARN: Can't rename method to resolve collision */
                    @Override // android.os.Parcelable.Creator
                    public final PendingPage createFromParcel(Parcel parcel) {
                        Intrinsics.checkNotNullParameter(parcel, "parcel");
                        return new PendingPage(parcel.readInt() == 0 ? null : RemoteImage.CREATOR.createFromParcel(parcel), parcel.readInt() != 0 ? RemoteImage.CREATOR.createFromParcel(parcel) : null);
                    }

                    /* JADX WARN: Can't rename method to resolve collision */
                    @Override // android.os.Parcelable.Creator
                    public final PendingPage[] newArray(int i10) {
                        return new PendingPage[i10];
                    }
                }

                public PendingPage() {
                    this(null, null, 3, null);
                }

                public static /* synthetic */ PendingPage copy$default(PendingPage pendingPage, RemoteImage remoteImage, RemoteImage remoteImage2, int i10, Object obj) {
                    if ((i10 & 1) != 0) {
                        remoteImage = pendingPage.headerPictograph;
                    }
                    if ((i10 & 2) != 0) {
                        remoteImage2 = pendingPage.loadingPictograph;
                    }
                    return pendingPage.copy(remoteImage, remoteImage2);
                }

                public final RemoteImage component1() {
                    return this.headerPictograph;
                }

                public final RemoteImage component2() {
                    return this.loadingPictograph;
                }

                @NotNull
                public final PendingPage copy(RemoteImage remoteImage, RemoteImage remoteImage2) {
                    return new PendingPage(remoteImage, remoteImage2);
                }

                @Override // android.os.Parcelable
                public final int describeContents() {
                    return 0;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if (obj instanceof PendingPage) {
                        PendingPage pendingPage = (PendingPage) obj;
                        return Intrinsics.areEqual(this.headerPictograph, pendingPage.headerPictograph) && Intrinsics.areEqual(this.loadingPictograph, pendingPage.loadingPictograph);
                    }
                    return false;
                }

                public final RemoteImage getHeaderPictograph() {
                    return this.headerPictograph;
                }

                public final RemoteImage getLoadingPictograph() {
                    return this.loadingPictograph;
                }

                public int hashCode() {
                    RemoteImage remoteImage = this.headerPictograph;
                    int hashCode = (remoteImage == null ? 0 : remoteImage.hashCode()) * 31;
                    RemoteImage remoteImage2 = this.loadingPictograph;
                    return hashCode + (remoteImage2 != null ? remoteImage2.hashCode() : 0);
                }

                @NotNull
                public String toString() {
                    RemoteImage remoteImage = this.headerPictograph;
                    RemoteImage remoteImage2 = this.loadingPictograph;
                    return "PendingPage(headerPictograph=" + remoteImage + ", loadingPictograph=" + remoteImage2 + ")";
                }

                @Override // android.os.Parcelable
                public final void writeToParcel(@NotNull Parcel dest, int i10) {
                    Intrinsics.checkNotNullParameter(dest, "dest");
                    RemoteImage remoteImage = this.headerPictograph;
                    if (remoteImage == null) {
                        dest.writeInt(0);
                    } else {
                        dest.writeInt(1);
                        remoteImage.writeToParcel(dest, i10);
                    }
                    RemoteImage remoteImage2 = this.loadingPictograph;
                    if (remoteImage2 == null) {
                        dest.writeInt(0);
                        return;
                    }
                    dest.writeInt(1);
                    remoteImage2.writeToParcel(dest, i10);
                }

                public PendingPage(RemoteImage remoteImage, RemoteImage remoteImage2) {
                    this.headerPictograph = remoteImage;
                    this.loadingPictograph = remoteImage2;
                }

                public /* synthetic */ PendingPage(RemoteImage remoteImage, RemoteImage remoteImage2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                    this((i10 & 1) != 0 ? null : remoteImage, (i10 & 2) != 0 ? null : remoteImage2);
                }
            }

            @i(generateAdapter = true)
            @Metadata(d1 = {"\u0000:\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0016\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0087\b\u0018\u00002\u00020\u0001BO\u0012\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\t\u0010\nJ\u000b\u0010\u0012\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\u0013\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\u0014\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\u0015\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\u0016\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\u0017\u001a\u0004\u0018\u00010\u0003HÆ\u0003JQ\u0010\u0018\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u0003HÆ\u0001J\u0006\u0010\u0019\u001a\u00020\u001aJ\u0013\u0010\u001b\u001a\u00020\u001c2\b\u0010\u001d\u001a\u0004\u0018\u00010\u001eHÖ\u0003J\t\u0010\u001f\u001a\u00020\u001aHÖ\u0001J\t\u0010 \u001a\u00020!HÖ\u0001J\u0016\u0010\"\u001a\u00020#2\u0006\u0010$\u001a\u00020%2\u0006\u0010&\u001a\u00020\u001aR\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\fR\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\fR\u0013\u0010\u0005\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\fR\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\fR\u0013\u0010\u0007\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\fR\u0013\u0010\b\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\f¨\u0006'"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$AssetConfig$PromptPage;", "Landroid/os/Parcelable;", "headerPictograph", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;", "idFrontPictograph", "idBackPictograph", "barcodePdf417Pictograph", "passportFrontPictograph", "passportSignaturePictograph", "<init>", "(Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;)V", "getHeaderPictograph", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;", "getIdFrontPictograph", "getIdBackPictograph", "getBarcodePdf417Pictograph", "getPassportFrontPictograph", "getPassportSignaturePictograph", "component1", "component2", "component3", "component4", "component5", "component6", "copy", "describeContents", "", "equals", "", "other", "", "hashCode", "toString", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class PromptPage implements Parcelable {
                @NotNull
                public static final Parcelable.Creator<PromptPage> CREATOR = new Creator();
                private final RemoteImage barcodePdf417Pictograph;
                private final RemoteImage headerPictograph;
                private final RemoteImage idBackPictograph;
                private final RemoteImage idFrontPictograph;
                private final RemoteImage passportFrontPictograph;
                private final RemoteImage passportSignaturePictograph;

                @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class Creator implements Parcelable.Creator<PromptPage> {
                    /* JADX WARN: Can't rename method to resolve collision */
                    @Override // android.os.Parcelable.Creator
                    public final PromptPage createFromParcel(Parcel parcel) {
                        Intrinsics.checkNotNullParameter(parcel, "parcel");
                        return new PromptPage(parcel.readInt() == 0 ? null : RemoteImage.CREATOR.createFromParcel(parcel), parcel.readInt() == 0 ? null : RemoteImage.CREATOR.createFromParcel(parcel), parcel.readInt() == 0 ? null : RemoteImage.CREATOR.createFromParcel(parcel), parcel.readInt() == 0 ? null : RemoteImage.CREATOR.createFromParcel(parcel), parcel.readInt() == 0 ? null : RemoteImage.CREATOR.createFromParcel(parcel), parcel.readInt() != 0 ? RemoteImage.CREATOR.createFromParcel(parcel) : null);
                    }

                    /* JADX WARN: Can't rename method to resolve collision */
                    @Override // android.os.Parcelable.Creator
                    public final PromptPage[] newArray(int i10) {
                        return new PromptPage[i10];
                    }
                }

                public PromptPage() {
                    this(null, null, null, null, null, null, 63, null);
                }

                public static /* synthetic */ PromptPage copy$default(PromptPage promptPage, RemoteImage remoteImage, RemoteImage remoteImage2, RemoteImage remoteImage3, RemoteImage remoteImage4, RemoteImage remoteImage5, RemoteImage remoteImage6, int i10, Object obj) {
                    if ((i10 & 1) != 0) {
                        remoteImage = promptPage.headerPictograph;
                    }
                    if ((i10 & 2) != 0) {
                        remoteImage2 = promptPage.idFrontPictograph;
                    }
                    if ((i10 & 4) != 0) {
                        remoteImage3 = promptPage.idBackPictograph;
                    }
                    if ((i10 & 8) != 0) {
                        remoteImage4 = promptPage.barcodePdf417Pictograph;
                    }
                    if ((i10 & 16) != 0) {
                        remoteImage5 = promptPage.passportFrontPictograph;
                    }
                    if ((i10 & 32) != 0) {
                        remoteImage6 = promptPage.passportSignaturePictograph;
                    }
                    RemoteImage remoteImage7 = remoteImage5;
                    RemoteImage remoteImage8 = remoteImage6;
                    return promptPage.copy(remoteImage, remoteImage2, remoteImage3, remoteImage4, remoteImage7, remoteImage8);
                }

                public final RemoteImage component1() {
                    return this.headerPictograph;
                }

                public final RemoteImage component2() {
                    return this.idFrontPictograph;
                }

                public final RemoteImage component3() {
                    return this.idBackPictograph;
                }

                public final RemoteImage component4() {
                    return this.barcodePdf417Pictograph;
                }

                public final RemoteImage component5() {
                    return this.passportFrontPictograph;
                }

                public final RemoteImage component6() {
                    return this.passportSignaturePictograph;
                }

                @NotNull
                public final PromptPage copy(RemoteImage remoteImage, RemoteImage remoteImage2, RemoteImage remoteImage3, RemoteImage remoteImage4, RemoteImage remoteImage5, RemoteImage remoteImage6) {
                    return new PromptPage(remoteImage, remoteImage2, remoteImage3, remoteImage4, remoteImage5, remoteImage6);
                }

                @Override // android.os.Parcelable
                public final int describeContents() {
                    return 0;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if (obj instanceof PromptPage) {
                        PromptPage promptPage = (PromptPage) obj;
                        return Intrinsics.areEqual(this.headerPictograph, promptPage.headerPictograph) && Intrinsics.areEqual(this.idFrontPictograph, promptPage.idFrontPictograph) && Intrinsics.areEqual(this.idBackPictograph, promptPage.idBackPictograph) && Intrinsics.areEqual(this.barcodePdf417Pictograph, promptPage.barcodePdf417Pictograph) && Intrinsics.areEqual(this.passportFrontPictograph, promptPage.passportFrontPictograph) && Intrinsics.areEqual(this.passportSignaturePictograph, promptPage.passportSignaturePictograph);
                    }
                    return false;
                }

                public final RemoteImage getBarcodePdf417Pictograph() {
                    return this.barcodePdf417Pictograph;
                }

                public final RemoteImage getHeaderPictograph() {
                    return this.headerPictograph;
                }

                public final RemoteImage getIdBackPictograph() {
                    return this.idBackPictograph;
                }

                public final RemoteImage getIdFrontPictograph() {
                    return this.idFrontPictograph;
                }

                public final RemoteImage getPassportFrontPictograph() {
                    return this.passportFrontPictograph;
                }

                public final RemoteImage getPassportSignaturePictograph() {
                    return this.passportSignaturePictograph;
                }

                public int hashCode() {
                    RemoteImage remoteImage = this.headerPictograph;
                    int hashCode = (remoteImage == null ? 0 : remoteImage.hashCode()) * 31;
                    RemoteImage remoteImage2 = this.idFrontPictograph;
                    int hashCode2 = (hashCode + (remoteImage2 == null ? 0 : remoteImage2.hashCode())) * 31;
                    RemoteImage remoteImage3 = this.idBackPictograph;
                    int hashCode3 = (hashCode2 + (remoteImage3 == null ? 0 : remoteImage3.hashCode())) * 31;
                    RemoteImage remoteImage4 = this.barcodePdf417Pictograph;
                    int hashCode4 = (hashCode3 + (remoteImage4 == null ? 0 : remoteImage4.hashCode())) * 31;
                    RemoteImage remoteImage5 = this.passportFrontPictograph;
                    int hashCode5 = (hashCode4 + (remoteImage5 == null ? 0 : remoteImage5.hashCode())) * 31;
                    RemoteImage remoteImage6 = this.passportSignaturePictograph;
                    return hashCode5 + (remoteImage6 != null ? remoteImage6.hashCode() : 0);
                }

                @NotNull
                public String toString() {
                    RemoteImage remoteImage = this.headerPictograph;
                    RemoteImage remoteImage2 = this.idFrontPictograph;
                    RemoteImage remoteImage3 = this.idBackPictograph;
                    RemoteImage remoteImage4 = this.barcodePdf417Pictograph;
                    RemoteImage remoteImage5 = this.passportFrontPictograph;
                    RemoteImage remoteImage6 = this.passportSignaturePictograph;
                    return "PromptPage(headerPictograph=" + remoteImage + ", idFrontPictograph=" + remoteImage2 + ", idBackPictograph=" + remoteImage3 + ", barcodePdf417Pictograph=" + remoteImage4 + ", passportFrontPictograph=" + remoteImage5 + ", passportSignaturePictograph=" + remoteImage6 + ")";
                }

                @Override // android.os.Parcelable
                public final void writeToParcel(@NotNull Parcel dest, int i10) {
                    Intrinsics.checkNotNullParameter(dest, "dest");
                    RemoteImage remoteImage = this.headerPictograph;
                    if (remoteImage == null) {
                        dest.writeInt(0);
                    } else {
                        dest.writeInt(1);
                        remoteImage.writeToParcel(dest, i10);
                    }
                    RemoteImage remoteImage2 = this.idFrontPictograph;
                    if (remoteImage2 == null) {
                        dest.writeInt(0);
                    } else {
                        dest.writeInt(1);
                        remoteImage2.writeToParcel(dest, i10);
                    }
                    RemoteImage remoteImage3 = this.idBackPictograph;
                    if (remoteImage3 == null) {
                        dest.writeInt(0);
                    } else {
                        dest.writeInt(1);
                        remoteImage3.writeToParcel(dest, i10);
                    }
                    RemoteImage remoteImage4 = this.barcodePdf417Pictograph;
                    if (remoteImage4 == null) {
                        dest.writeInt(0);
                    } else {
                        dest.writeInt(1);
                        remoteImage4.writeToParcel(dest, i10);
                    }
                    RemoteImage remoteImage5 = this.passportFrontPictograph;
                    if (remoteImage5 == null) {
                        dest.writeInt(0);
                    } else {
                        dest.writeInt(1);
                        remoteImage5.writeToParcel(dest, i10);
                    }
                    RemoteImage remoteImage6 = this.passportSignaturePictograph;
                    if (remoteImage6 == null) {
                        dest.writeInt(0);
                        return;
                    }
                    dest.writeInt(1);
                    remoteImage6.writeToParcel(dest, i10);
                }

                public PromptPage(RemoteImage remoteImage, RemoteImage remoteImage2, RemoteImage remoteImage3, RemoteImage remoteImage4, RemoteImage remoteImage5, RemoteImage remoteImage6) {
                    this.headerPictograph = remoteImage;
                    this.idFrontPictograph = remoteImage2;
                    this.idBackPictograph = remoteImage3;
                    this.barcodePdf417Pictograph = remoteImage4;
                    this.passportFrontPictograph = remoteImage5;
                    this.passportSignaturePictograph = remoteImage6;
                }

                public /* synthetic */ PromptPage(RemoteImage remoteImage, RemoteImage remoteImage2, RemoteImage remoteImage3, RemoteImage remoteImage4, RemoteImage remoteImage5, RemoteImage remoteImage6, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                    this((i10 & 1) != 0 ? null : remoteImage, (i10 & 2) != 0 ? null : remoteImage2, (i10 & 4) != 0 ? null : remoteImage3, (i10 & 8) != 0 ? null : remoteImage4, (i10 & 16) != 0 ? null : remoteImage5, (i10 & 32) != 0 ? null : remoteImage6);
                }
            }

            @i(generateAdapter = true)
            @Metadata(d1 = {"\u0000:\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0013\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0087\b\u0018\u00002\u00020\u0001BC\u0012\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\b\u0010\tJ\u000b\u0010\u0010\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\u0011\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\u0012\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\u0013\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\u0014\u001a\u0004\u0018\u00010\u0003HÆ\u0003JE\u0010\u0015\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u0003HÆ\u0001J\u0006\u0010\u0016\u001a\u00020\u0017J\u0013\u0010\u0018\u001a\u00020\u00192\b\u0010\u001a\u001a\u0004\u0018\u00010\u001bHÖ\u0003J\t\u0010\u001c\u001a\u00020\u0017HÖ\u0001J\t\u0010\u001d\u001a\u00020\u001eHÖ\u0001J\u0016\u0010\u001f\u001a\u00020 2\u0006\u0010!\u001a\u00020\"2\u0006\u0010#\u001a\u00020\u0017R\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000bR\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\u000bR\u0013\u0010\u0005\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u000bR\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000bR\u0013\u0010\u0007\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u000b¨\u0006$"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$AssetConfig$SelectPage;", "Landroid/os/Parcelable;", "headerPictograph", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;", "iconDriversLicense", "iconPassport", "iconNationalId", "iconGovernmentId", "<init>", "(Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;)V", "getHeaderPictograph", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;", "getIconDriversLicense", "getIconPassport", "getIconNationalId", "getIconGovernmentId", "component1", "component2", "component3", "component4", "component5", "copy", "describeContents", "", "equals", "", "other", "", "hashCode", "toString", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class SelectPage implements Parcelable {
                @NotNull
                public static final Parcelable.Creator<SelectPage> CREATOR = new Creator();
                private final RemoteImage headerPictograph;
                private final RemoteImage iconDriversLicense;
                private final RemoteImage iconGovernmentId;
                private final RemoteImage iconNationalId;
                private final RemoteImage iconPassport;

                @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class Creator implements Parcelable.Creator<SelectPage> {
                    /* JADX WARN: Can't rename method to resolve collision */
                    @Override // android.os.Parcelable.Creator
                    public final SelectPage createFromParcel(Parcel parcel) {
                        Intrinsics.checkNotNullParameter(parcel, "parcel");
                        return new SelectPage(parcel.readInt() == 0 ? null : RemoteImage.CREATOR.createFromParcel(parcel), parcel.readInt() == 0 ? null : RemoteImage.CREATOR.createFromParcel(parcel), parcel.readInt() == 0 ? null : RemoteImage.CREATOR.createFromParcel(parcel), parcel.readInt() == 0 ? null : RemoteImage.CREATOR.createFromParcel(parcel), parcel.readInt() != 0 ? RemoteImage.CREATOR.createFromParcel(parcel) : null);
                    }

                    /* JADX WARN: Can't rename method to resolve collision */
                    @Override // android.os.Parcelable.Creator
                    public final SelectPage[] newArray(int i10) {
                        return new SelectPage[i10];
                    }
                }

                public SelectPage() {
                    this(null, null, null, null, null, 31, null);
                }

                public static /* synthetic */ SelectPage copy$default(SelectPage selectPage, RemoteImage remoteImage, RemoteImage remoteImage2, RemoteImage remoteImage3, RemoteImage remoteImage4, RemoteImage remoteImage5, int i10, Object obj) {
                    if ((i10 & 1) != 0) {
                        remoteImage = selectPage.headerPictograph;
                    }
                    if ((i10 & 2) != 0) {
                        remoteImage2 = selectPage.iconDriversLicense;
                    }
                    if ((i10 & 4) != 0) {
                        remoteImage3 = selectPage.iconPassport;
                    }
                    if ((i10 & 8) != 0) {
                        remoteImage4 = selectPage.iconNationalId;
                    }
                    if ((i10 & 16) != 0) {
                        remoteImage5 = selectPage.iconGovernmentId;
                    }
                    RemoteImage remoteImage6 = remoteImage5;
                    RemoteImage remoteImage7 = remoteImage3;
                    return selectPage.copy(remoteImage, remoteImage2, remoteImage7, remoteImage4, remoteImage6);
                }

                public final RemoteImage component1() {
                    return this.headerPictograph;
                }

                public final RemoteImage component2() {
                    return this.iconDriversLicense;
                }

                public final RemoteImage component3() {
                    return this.iconPassport;
                }

                public final RemoteImage component4() {
                    return this.iconNationalId;
                }

                public final RemoteImage component5() {
                    return this.iconGovernmentId;
                }

                @NotNull
                public final SelectPage copy(RemoteImage remoteImage, RemoteImage remoteImage2, RemoteImage remoteImage3, RemoteImage remoteImage4, RemoteImage remoteImage5) {
                    return new SelectPage(remoteImage, remoteImage2, remoteImage3, remoteImage4, remoteImage5);
                }

                @Override // android.os.Parcelable
                public final int describeContents() {
                    return 0;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if (obj instanceof SelectPage) {
                        SelectPage selectPage = (SelectPage) obj;
                        return Intrinsics.areEqual(this.headerPictograph, selectPage.headerPictograph) && Intrinsics.areEqual(this.iconDriversLicense, selectPage.iconDriversLicense) && Intrinsics.areEqual(this.iconPassport, selectPage.iconPassport) && Intrinsics.areEqual(this.iconNationalId, selectPage.iconNationalId) && Intrinsics.areEqual(this.iconGovernmentId, selectPage.iconGovernmentId);
                    }
                    return false;
                }

                public final RemoteImage getHeaderPictograph() {
                    return this.headerPictograph;
                }

                public final RemoteImage getIconDriversLicense() {
                    return this.iconDriversLicense;
                }

                public final RemoteImage getIconGovernmentId() {
                    return this.iconGovernmentId;
                }

                public final RemoteImage getIconNationalId() {
                    return this.iconNationalId;
                }

                public final RemoteImage getIconPassport() {
                    return this.iconPassport;
                }

                public int hashCode() {
                    RemoteImage remoteImage = this.headerPictograph;
                    int hashCode = (remoteImage == null ? 0 : remoteImage.hashCode()) * 31;
                    RemoteImage remoteImage2 = this.iconDriversLicense;
                    int hashCode2 = (hashCode + (remoteImage2 == null ? 0 : remoteImage2.hashCode())) * 31;
                    RemoteImage remoteImage3 = this.iconPassport;
                    int hashCode3 = (hashCode2 + (remoteImage3 == null ? 0 : remoteImage3.hashCode())) * 31;
                    RemoteImage remoteImage4 = this.iconNationalId;
                    int hashCode4 = (hashCode3 + (remoteImage4 == null ? 0 : remoteImage4.hashCode())) * 31;
                    RemoteImage remoteImage5 = this.iconGovernmentId;
                    return hashCode4 + (remoteImage5 != null ? remoteImage5.hashCode() : 0);
                }

                @NotNull
                public String toString() {
                    RemoteImage remoteImage = this.headerPictograph;
                    RemoteImage remoteImage2 = this.iconDriversLicense;
                    RemoteImage remoteImage3 = this.iconPassport;
                    RemoteImage remoteImage4 = this.iconNationalId;
                    RemoteImage remoteImage5 = this.iconGovernmentId;
                    return "SelectPage(headerPictograph=" + remoteImage + ", iconDriversLicense=" + remoteImage2 + ", iconPassport=" + remoteImage3 + ", iconNationalId=" + remoteImage4 + ", iconGovernmentId=" + remoteImage5 + ")";
                }

                @Override // android.os.Parcelable
                public final void writeToParcel(@NotNull Parcel dest, int i10) {
                    Intrinsics.checkNotNullParameter(dest, "dest");
                    RemoteImage remoteImage = this.headerPictograph;
                    if (remoteImage == null) {
                        dest.writeInt(0);
                    } else {
                        dest.writeInt(1);
                        remoteImage.writeToParcel(dest, i10);
                    }
                    RemoteImage remoteImage2 = this.iconDriversLicense;
                    if (remoteImage2 == null) {
                        dest.writeInt(0);
                    } else {
                        dest.writeInt(1);
                        remoteImage2.writeToParcel(dest, i10);
                    }
                    RemoteImage remoteImage3 = this.iconPassport;
                    if (remoteImage3 == null) {
                        dest.writeInt(0);
                    } else {
                        dest.writeInt(1);
                        remoteImage3.writeToParcel(dest, i10);
                    }
                    RemoteImage remoteImage4 = this.iconNationalId;
                    if (remoteImage4 == null) {
                        dest.writeInt(0);
                    } else {
                        dest.writeInt(1);
                        remoteImage4.writeToParcel(dest, i10);
                    }
                    RemoteImage remoteImage5 = this.iconGovernmentId;
                    if (remoteImage5 == null) {
                        dest.writeInt(0);
                        return;
                    }
                    dest.writeInt(1);
                    remoteImage5.writeToParcel(dest, i10);
                }

                public SelectPage(RemoteImage remoteImage, RemoteImage remoteImage2, RemoteImage remoteImage3, RemoteImage remoteImage4, RemoteImage remoteImage5) {
                    this.headerPictograph = remoteImage;
                    this.iconDriversLicense = remoteImage2;
                    this.iconPassport = remoteImage3;
                    this.iconNationalId = remoteImage4;
                    this.iconGovernmentId = remoteImage5;
                }

                public /* synthetic */ SelectPage(RemoteImage remoteImage, RemoteImage remoteImage2, RemoteImage remoteImage3, RemoteImage remoteImage4, RemoteImage remoteImage5, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                    this((i10 & 1) != 0 ? null : remoteImage, (i10 & 2) != 0 ? null : remoteImage2, (i10 & 4) != 0 ? null : remoteImage3, (i10 & 8) != 0 ? null : remoteImage4, (i10 & 16) != 0 ? null : remoteImage5);
                }
            }

            public AssetConfig() {
                this(null, null, null, null, null, 31, null);
            }

            public static /* synthetic */ AssetConfig copy$default(AssetConfig assetConfig, SelectPage selectPage, PromptPage promptPage, CapturePage capturePage, CheckPage checkPage, PendingPage pendingPage, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    selectPage = assetConfig.selectPage;
                }
                if ((i10 & 2) != 0) {
                    promptPage = assetConfig.promptPage;
                }
                if ((i10 & 4) != 0) {
                    capturePage = assetConfig.capturePage;
                }
                if ((i10 & 8) != 0) {
                    checkPage = assetConfig.checkPage;
                }
                if ((i10 & 16) != 0) {
                    pendingPage = assetConfig.pendingPage;
                }
                PendingPage pendingPage2 = pendingPage;
                CapturePage capturePage2 = capturePage;
                return assetConfig.copy(selectPage, promptPage, capturePage2, checkPage, pendingPage2);
            }

            public final SelectPage component1() {
                return this.selectPage;
            }

            public final PromptPage component2() {
                return this.promptPage;
            }

            public final CapturePage component3() {
                return this.capturePage;
            }

            public final CheckPage component4() {
                return this.checkPage;
            }

            public final PendingPage component5() {
                return this.pendingPage;
            }

            @NotNull
            public final AssetConfig copy(SelectPage selectPage, PromptPage promptPage, CapturePage capturePage, CheckPage checkPage, PendingPage pendingPage) {
                return new AssetConfig(selectPage, promptPage, capturePage, checkPage, pendingPage);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof AssetConfig) {
                    AssetConfig assetConfig = (AssetConfig) obj;
                    return Intrinsics.areEqual(this.selectPage, assetConfig.selectPage) && Intrinsics.areEqual(this.promptPage, assetConfig.promptPage) && Intrinsics.areEqual(this.capturePage, assetConfig.capturePage) && Intrinsics.areEqual(this.checkPage, assetConfig.checkPage) && Intrinsics.areEqual(this.pendingPage, assetConfig.pendingPage);
                }
                return false;
            }

            public final CapturePage getCapturePage() {
                return this.capturePage;
            }

            public final CheckPage getCheckPage() {
                return this.checkPage;
            }

            public final PendingPage getPendingPage() {
                return this.pendingPage;
            }

            public final PromptPage getPromptPage() {
                return this.promptPage;
            }

            public final SelectPage getSelectPage() {
                return this.selectPage;
            }

            public int hashCode() {
                SelectPage selectPage = this.selectPage;
                int hashCode = (selectPage == null ? 0 : selectPage.hashCode()) * 31;
                PromptPage promptPage = this.promptPage;
                int hashCode2 = (hashCode + (promptPage == null ? 0 : promptPage.hashCode())) * 31;
                CapturePage capturePage = this.capturePage;
                int hashCode3 = (hashCode2 + (capturePage == null ? 0 : capturePage.hashCode())) * 31;
                CheckPage checkPage = this.checkPage;
                int hashCode4 = (hashCode3 + (checkPage == null ? 0 : checkPage.hashCode())) * 31;
                PendingPage pendingPage = this.pendingPage;
                return hashCode4 + (pendingPage != null ? pendingPage.hashCode() : 0);
            }

            @NotNull
            public String toString() {
                SelectPage selectPage = this.selectPage;
                PromptPage promptPage = this.promptPage;
                CapturePage capturePage = this.capturePage;
                CheckPage checkPage = this.checkPage;
                PendingPage pendingPage = this.pendingPage;
                return "AssetConfig(selectPage=" + selectPage + ", promptPage=" + promptPage + ", capturePage=" + capturePage + ", checkPage=" + checkPage + ", pendingPage=" + pendingPage + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(@NotNull Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                SelectPage selectPage = this.selectPage;
                if (selectPage == null) {
                    dest.writeInt(0);
                } else {
                    dest.writeInt(1);
                    selectPage.writeToParcel(dest, i10);
                }
                PromptPage promptPage = this.promptPage;
                if (promptPage == null) {
                    dest.writeInt(0);
                } else {
                    dest.writeInt(1);
                    promptPage.writeToParcel(dest, i10);
                }
                CapturePage capturePage = this.capturePage;
                if (capturePage == null) {
                    dest.writeInt(0);
                } else {
                    dest.writeInt(1);
                    capturePage.writeToParcel(dest, i10);
                }
                CheckPage checkPage = this.checkPage;
                if (checkPage == null) {
                    dest.writeInt(0);
                } else {
                    dest.writeInt(1);
                    checkPage.writeToParcel(dest, i10);
                }
                PendingPage pendingPage = this.pendingPage;
                if (pendingPage == null) {
                    dest.writeInt(0);
                    return;
                }
                dest.writeInt(1);
                pendingPage.writeToParcel(dest, i10);
            }

            public AssetConfig(SelectPage selectPage, PromptPage promptPage, CapturePage capturePage, CheckPage checkPage, PendingPage pendingPage) {
                this.selectPage = selectPage;
                this.promptPage = promptPage;
                this.capturePage = capturePage;
                this.checkPage = checkPage;
                this.pendingPage = pendingPage;
            }

            public /* synthetic */ AssetConfig(SelectPage selectPage, PromptPage promptPage, CapturePage capturePage, CheckPage checkPage, PendingPage pendingPage, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this((i10 & 1) != 0 ? null : selectPage, (i10 & 2) != 0 ? null : promptPage, (i10 & 4) != 0 ? null : capturePage, (i10 & 8) != 0 ? null : checkPage, (i10 & 16) != 0 ? null : pendingPage);
            }
        }

        @i(generateAdapter = true)
        @Metadata(d1 = {"\u0000>\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\r\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0087\b\u0018\u00002\u00020\u0001B+\u0012\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0006¢\u0006\u0004\b\u0007\u0010\bJ\u0010\u0010\u000e\u001a\u0004\u0018\u00010\u0003HÆ\u0003¢\u0006\u0002\u0010\tJ\u0010\u0010\u000f\u001a\u0004\u0018\u00010\u0003HÆ\u0003¢\u0006\u0002\u0010\tJ\u000b\u0010\u0010\u001a\u0004\u0018\u00010\u0006HÆ\u0003J2\u0010\u0011\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0006HÆ\u0001¢\u0006\u0002\u0010\u0012J\u0006\u0010\u0013\u001a\u00020\u0014J\u0013\u0010\u0015\u001a\u00020\u00032\b\u0010\u0016\u001a\u0004\u0018\u00010\u0017HÖ\u0003J\t\u0010\u0018\u001a\u00020\u0014HÖ\u0001J\t\u0010\u0019\u001a\u00020\u001aHÖ\u0001J\u0016\u0010\u001b\u001a\u00020\u001c2\u0006\u0010\u001d\u001a\u00020\u001e2\u0006\u0010\u001f\u001a\u00020\u0014R\u0015\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\n\n\u0002\u0010\n\u001a\u0004\b\u0002\u0010\tR\u0015\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\n\n\u0002\u0010\n\u001a\u0004\b\u000b\u0010\tR\u0013\u0010\u0005\u001a\u0004\u0018\u00010\u0006¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\r¨\u0006 "}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$AutoClassificationConfig;", "Landroid/os/Parcelable;", "isEnabled", "", "extractTextFromImage", "capturePageConfig", "Lcom/withpersona/sdk2/inquiry/network/dto/government_id/CapturePageConfig;", "<init>", "(Ljava/lang/Boolean;Ljava/lang/Boolean;Lcom/withpersona/sdk2/inquiry/network/dto/government_id/CapturePageConfig;)V", "()Ljava/lang/Boolean;", "Ljava/lang/Boolean;", "getExtractTextFromImage", "getCapturePageConfig", "()Lcom/withpersona/sdk2/inquiry/network/dto/government_id/CapturePageConfig;", "component1", "component2", "component3", "copy", "(Ljava/lang/Boolean;Ljava/lang/Boolean;Lcom/withpersona/sdk2/inquiry/network/dto/government_id/CapturePageConfig;)Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$AutoClassificationConfig;", "describeContents", "", "equals", "other", "", "hashCode", "toString", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class AutoClassificationConfig implements Parcelable {
            @NotNull
            public static final Parcelable.Creator<AutoClassificationConfig> CREATOR = new Creator();
            private final CapturePageConfig capturePageConfig;
            private final Boolean extractTextFromImage;
            private final Boolean isEnabled;

            @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Creator implements Parcelable.Creator<AutoClassificationConfig> {
                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final AutoClassificationConfig createFromParcel(Parcel parcel) {
                    Boolean valueOf;
                    Boolean valueOf2;
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    if (parcel.readInt() == 0) {
                        valueOf = null;
                    } else {
                        valueOf = Boolean.valueOf(parcel.readInt() != 0);
                    }
                    if (parcel.readInt() == 0) {
                        valueOf2 = null;
                    } else {
                        valueOf2 = Boolean.valueOf(parcel.readInt() != 0);
                    }
                    return new AutoClassificationConfig(valueOf, valueOf2, parcel.readInt() != 0 ? CapturePageConfig.CREATOR.createFromParcel(parcel) : null);
                }

                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final AutoClassificationConfig[] newArray(int i10) {
                    return new AutoClassificationConfig[i10];
                }
            }

            public AutoClassificationConfig() {
                this(null, null, null, 7, null);
            }

            public static /* synthetic */ AutoClassificationConfig copy$default(AutoClassificationConfig autoClassificationConfig, Boolean bool, Boolean bool2, CapturePageConfig capturePageConfig, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    bool = autoClassificationConfig.isEnabled;
                }
                if ((i10 & 2) != 0) {
                    bool2 = autoClassificationConfig.extractTextFromImage;
                }
                if ((i10 & 4) != 0) {
                    capturePageConfig = autoClassificationConfig.capturePageConfig;
                }
                return autoClassificationConfig.copy(bool, bool2, capturePageConfig);
            }

            public final Boolean component1() {
                return this.isEnabled;
            }

            public final Boolean component2() {
                return this.extractTextFromImage;
            }

            public final CapturePageConfig component3() {
                return this.capturePageConfig;
            }

            @NotNull
            public final AutoClassificationConfig copy(Boolean bool, Boolean bool2, CapturePageConfig capturePageConfig) {
                return new AutoClassificationConfig(bool, bool2, capturePageConfig);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof AutoClassificationConfig) {
                    AutoClassificationConfig autoClassificationConfig = (AutoClassificationConfig) obj;
                    return Intrinsics.areEqual(this.isEnabled, autoClassificationConfig.isEnabled) && Intrinsics.areEqual(this.extractTextFromImage, autoClassificationConfig.extractTextFromImage) && Intrinsics.areEqual(this.capturePageConfig, autoClassificationConfig.capturePageConfig);
                }
                return false;
            }

            public final CapturePageConfig getCapturePageConfig() {
                return this.capturePageConfig;
            }

            public final Boolean getExtractTextFromImage() {
                return this.extractTextFromImage;
            }

            public int hashCode() {
                Boolean bool = this.isEnabled;
                int hashCode = (bool == null ? 0 : bool.hashCode()) * 31;
                Boolean bool2 = this.extractTextFromImage;
                int hashCode2 = (hashCode + (bool2 == null ? 0 : bool2.hashCode())) * 31;
                CapturePageConfig capturePageConfig = this.capturePageConfig;
                return hashCode2 + (capturePageConfig != null ? capturePageConfig.hashCode() : 0);
            }

            public final Boolean isEnabled() {
                return this.isEnabled;
            }

            @NotNull
            public String toString() {
                Boolean bool = this.isEnabled;
                Boolean bool2 = this.extractTextFromImage;
                CapturePageConfig capturePageConfig = this.capturePageConfig;
                return "AutoClassificationConfig(isEnabled=" + bool + ", extractTextFromImage=" + bool2 + ", capturePageConfig=" + capturePageConfig + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(@NotNull Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                Boolean bool = this.isEnabled;
                if (bool == null) {
                    dest.writeInt(0);
                } else {
                    dest.writeInt(1);
                    dest.writeInt(bool.booleanValue() ? 1 : 0);
                }
                Boolean bool2 = this.extractTextFromImage;
                if (bool2 == null) {
                    dest.writeInt(0);
                } else {
                    dest.writeInt(1);
                    dest.writeInt(bool2.booleanValue() ? 1 : 0);
                }
                CapturePageConfig capturePageConfig = this.capturePageConfig;
                if (capturePageConfig == null) {
                    dest.writeInt(0);
                    return;
                }
                dest.writeInt(1);
                capturePageConfig.writeToParcel(dest, i10);
            }

            public AutoClassificationConfig(Boolean bool, Boolean bool2, CapturePageConfig capturePageConfig) {
                this.isEnabled = bool;
                this.extractTextFromImage = bool2;
                this.capturePageConfig = capturePageConfig;
            }

            public /* synthetic */ AutoClassificationConfig(Boolean bool, Boolean bool2, CapturePageConfig capturePageConfig, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this((i10 & 1) != 0 ? null : bool, (i10 & 2) != 0 ? null : bool2, (i10 & 4) != 0 ? null : capturePageConfig);
            }
        }

        @i(generateAdapter = true)
        @Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0015\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0007\u0018\u00002\u00020\u0001Ba\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\b\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\t\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\f\u0010\rJ\u0006\u0010\u0018\u001a\u00020\u0019J\u0016\u0010\u001a\u001a\u00020\u001b2\u0006\u0010\u001c\u001a\u00020\u001d2\u0006\u0010\u001e\u001a\u00020\u0019R\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000fR\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u000fR\u0013\u0010\u0005\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u000fR\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u000fR\u0013\u0010\u0007\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\u000fR\u0013\u0010\b\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u000fR\u0013\u0010\t\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u000fR\u0013\u0010\n\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0016\u0010\u000fR\u0013\u0010\u000b\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0017\u0010\u000f¨\u0006\u001f"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$AutoClassificationPage;", "Landroid/os/Parcelable;", "unableToClassifyDocumentTitle", "", "unableToClassifyDocumentContinueButtonText", "idClassRejectedTitle", "idClassRejectedContinueButtonText", "countryInputTitle", "idClassInputTitle", "manualClassificationTitle", "manualClassificationContinueButtonText", "autoClassificationCaptureTipText", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", "getUnableToClassifyDocumentTitle", "()Ljava/lang/String;", "getUnableToClassifyDocumentContinueButtonText", "getIdClassRejectedTitle", "getIdClassRejectedContinueButtonText", "getCountryInputTitle", "getIdClassInputTitle", "getManualClassificationTitle", "getManualClassificationContinueButtonText", "getAutoClassificationCaptureTipText", "describeContents", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class AutoClassificationPage implements Parcelable {
            @NotNull
            public static final Parcelable.Creator<AutoClassificationPage> CREATOR = new Creator();
            private final String autoClassificationCaptureTipText;
            private final String countryInputTitle;
            private final String idClassInputTitle;
            private final String idClassRejectedContinueButtonText;
            private final String idClassRejectedTitle;
            private final String manualClassificationContinueButtonText;
            private final String manualClassificationTitle;
            private final String unableToClassifyDocumentContinueButtonText;
            private final String unableToClassifyDocumentTitle;

            @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Creator implements Parcelable.Creator<AutoClassificationPage> {
                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final AutoClassificationPage createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    return new AutoClassificationPage(parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString());
                }

                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final AutoClassificationPage[] newArray(int i10) {
                    return new AutoClassificationPage[i10];
                }
            }

            public AutoClassificationPage(String str, String str2, String str3, String str4, String str5, String str6, String str7, String str8, String str9) {
                this.unableToClassifyDocumentTitle = str;
                this.unableToClassifyDocumentContinueButtonText = str2;
                this.idClassRejectedTitle = str3;
                this.idClassRejectedContinueButtonText = str4;
                this.countryInputTitle = str5;
                this.idClassInputTitle = str6;
                this.manualClassificationTitle = str7;
                this.manualClassificationContinueButtonText = str8;
                this.autoClassificationCaptureTipText = str9;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public final String getAutoClassificationCaptureTipText() {
                return this.autoClassificationCaptureTipText;
            }

            public final String getCountryInputTitle() {
                return this.countryInputTitle;
            }

            public final String getIdClassInputTitle() {
                return this.idClassInputTitle;
            }

            public final String getIdClassRejectedContinueButtonText() {
                return this.idClassRejectedContinueButtonText;
            }

            public final String getIdClassRejectedTitle() {
                return this.idClassRejectedTitle;
            }

            public final String getManualClassificationContinueButtonText() {
                return this.manualClassificationContinueButtonText;
            }

            public final String getManualClassificationTitle() {
                return this.manualClassificationTitle;
            }

            public final String getUnableToClassifyDocumentContinueButtonText() {
                return this.unableToClassifyDocumentContinueButtonText;
            }

            public final String getUnableToClassifyDocumentTitle() {
                return this.unableToClassifyDocumentTitle;
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(@NotNull Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.unableToClassifyDocumentTitle);
                dest.writeString(this.unableToClassifyDocumentContinueButtonText);
                dest.writeString(this.idClassRejectedTitle);
                dest.writeString(this.idClassRejectedContinueButtonText);
                dest.writeString(this.countryInputTitle);
                dest.writeString(this.idClassInputTitle);
                dest.writeString(this.manualClassificationTitle);
                dest.writeString(this.manualClassificationContinueButtonText);
                dest.writeString(this.autoClassificationCaptureTipText);
            }
        }

        /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
        /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
        @i(generateAdapter = false)
        @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0007\b\u0087\u0081\u0002\u0018\u0000 \u00072\b\u0012\u0004\u0012\u00020\u00000\u0001:\u0001\u0007B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003j\u0002\b\u0004j\u0002\b\u0005j\u0002\b\u0006¨\u0006\b"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$CaptureFileType;", "", "<init>", "(Ljava/lang/String;I)V", "Image", "Video", "Unknown", "Companion", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class CaptureFileType {
            private static final /* synthetic */ EnumEntries $ENTRIES;
            private static final /* synthetic */ CaptureFileType[] $VALUES;
            @NotNull
            public static final Companion Companion;
            public static final CaptureFileType Image = new CaptureFileType("Image", 0);
            public static final CaptureFileType Video = new CaptureFileType("Video", 1);
            public static final CaptureFileType Unknown = new CaptureFileType("Unknown", 2);

            @Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0003\b\u0086\u0003\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u0017\u0010\u0007\u001a\u00020\u00022\u0006\u0010\u0006\u001a\u00020\u0005H\u0017¢\u0006\u0004\b\u0007\u0010\bJ!\u0010\r\u001a\u00020\f2\u0006\u0010\n\u001a\u00020\t2\b\u0010\u000b\u001a\u0004\u0018\u00010\u0002H\u0017¢\u0006\u0004\b\r\u0010\u000e¨\u0006\u000f"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$CaptureFileType$Companion;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$CaptureFileType;", "<init>", "()V", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$CaptureFileType;", "Lcom/squareup/moshi/t;", "writer", "value", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$CaptureFileType;)V", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Companion extends h {
                public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                    this();
                }

                @Override // com.squareup.moshi.h
                @z
                public void toJson(@NotNull t writer, CaptureFileType captureFileType) {
                    Intrinsics.checkNotNullParameter(writer, "writer");
                }

                private Companion() {
                }

                @Override // com.squareup.moshi.h
                @f
                @NotNull
                public CaptureFileType fromJson(@NotNull m reader) {
                    Intrinsics.checkNotNullParameter(reader, "reader");
                    Object V = reader.V();
                    return Intrinsics.areEqual(V, MediaStreamTrack.VIDEO_TRACK_KIND) ? CaptureFileType.Video : Intrinsics.areEqual(V, "image") ? CaptureFileType.Image : CaptureFileType.Unknown;
                }
            }

            private static final /* synthetic */ CaptureFileType[] $values() {
                return new CaptureFileType[]{Image, Video, Unknown};
            }

            static {
                CaptureFileType[] $values = $values();
                $VALUES = $values;
                $ENTRIES = vr.a.a($values);
                Companion = new Companion(null);
            }

            private CaptureFileType(String str, int i10) {
            }

            @NotNull
            public static EnumEntries getEntries() {
                return $ENTRIES;
            }

            public static CaptureFileType valueOf(String str) {
                return (CaptureFileType) Enum.valueOf(CaptureFileType.class, str);
            }

            public static CaptureFileType[] values() {
                return (CaptureFileType[]) $VALUES.clone();
            }
        }

        @i(generateAdapter = true)
        @Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b3\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0007\u0018\u00002\u00020\u0001Bé\u0001\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0003\u0012\u0006\u0010\u0007\u001a\u00020\u0003\u0012\u0006\u0010\b\u001a\u00020\u0003\u0012\u0006\u0010\t\u001a\u00020\u0003\u0012\u0006\u0010\n\u001a\u00020\u0003\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\f\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\r\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u000e\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u000f\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0010\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0011\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0012\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0013\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0014\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0015\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0016\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0017\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0018\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0019\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u001a\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u001b\u0010\u001cJ\u0006\u00106\u001a\u000207J\u0016\u00108\u001a\u0002092\u0006\u0010:\u001a\u00020;2\u0006\u0010<\u001a\u000207R\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u001d\u0010\u001eR\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u001f\u0010\u001eR\u0011\u0010\u0005\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b \u0010\u001eR\u0011\u0010\u0006\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b!\u0010\u001eR\u0011\u0010\u0007\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\"\u0010\u001eR\u0011\u0010\b\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b#\u0010\u001eR\u0011\u0010\t\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b$\u0010\u001eR\u0011\u0010\n\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b%\u0010\u001eR\u0013\u0010\u000b\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b&\u0010\u001eR\u0013\u0010\f\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b'\u0010\u001eR\u0013\u0010\r\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b(\u0010\u001eR\u0013\u0010\u000e\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b)\u0010\u001eR\u0013\u0010\u000f\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b*\u0010\u001eR\u0013\u0010\u0010\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b+\u0010\u001eR\u0013\u0010\u0011\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b,\u0010\u001eR\u0013\u0010\u0012\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b-\u0010\u001eR\u0013\u0010\u0013\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b.\u0010\u001eR\u0013\u0010\u0014\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b/\u0010\u001eR\u0013\u0010\u0015\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b0\u0010\u001eR\u0013\u0010\u0016\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b1\u0010\u001eR\u0013\u0010\u0017\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b2\u0010\u001eR\u0013\u0010\u0018\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b3\u0010\u001eR\u0013\u0010\u0019\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b4\u0010\u001eR\u0013\u0010\u001a\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b5\u0010\u001e¨\u0006="}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$CapturePage;", "Landroid/os/Parcelable;", "title", "", "scanFront", "scanBack", "scanPdf417", "scanFrontOrBack", "scanSignature", "capturing", "confirmCapture", "disclaimer", "hintHoldStill", "hintLowLight", "btnHelp", "barcodeHelpModalTitle", "barcodeHelpModalPrompt", "barcodeHelpModalHints", "barcodeHelpModalContinueBtn", "idFrontHelpModalTitle", "idFrontHelpModalPrompt", "idFrontHelpModalHintsMobile", "idFrontHelpModalContinueBtn", "idBackHelpModalTitle", "idBackHelpModalPrompt", "idBackHelpModalHintsMobile", "idBackHelpModalContinueBtn", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", "getTitle", "()Ljava/lang/String;", "getScanFront", "getScanBack", "getScanPdf417", "getScanFrontOrBack", "getScanSignature", "getCapturing", "getConfirmCapture", "getDisclaimer", "getHintHoldStill", "getHintLowLight", "getBtnHelp", "getBarcodeHelpModalTitle", "getBarcodeHelpModalPrompt", "getBarcodeHelpModalHints", "getBarcodeHelpModalContinueBtn", "getIdFrontHelpModalTitle", "getIdFrontHelpModalPrompt", "getIdFrontHelpModalHintsMobile", "getIdFrontHelpModalContinueBtn", "getIdBackHelpModalTitle", "getIdBackHelpModalPrompt", "getIdBackHelpModalHintsMobile", "getIdBackHelpModalContinueBtn", "describeContents", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class CapturePage implements Parcelable {
            @NotNull
            public static final Parcelable.Creator<CapturePage> CREATOR = new Creator();
            private final String barcodeHelpModalContinueBtn;
            private final String barcodeHelpModalHints;
            private final String barcodeHelpModalPrompt;
            private final String barcodeHelpModalTitle;
            private final String btnHelp;
            @NotNull
            private final String capturing;
            @NotNull
            private final String confirmCapture;
            private final String disclaimer;
            private final String hintHoldStill;
            private final String hintLowLight;
            private final String idBackHelpModalContinueBtn;
            private final String idBackHelpModalHintsMobile;
            private final String idBackHelpModalPrompt;
            private final String idBackHelpModalTitle;
            private final String idFrontHelpModalContinueBtn;
            private final String idFrontHelpModalHintsMobile;
            private final String idFrontHelpModalPrompt;
            private final String idFrontHelpModalTitle;
            @NotNull
            private final String scanBack;
            @NotNull
            private final String scanFront;
            @NotNull
            private final String scanFrontOrBack;
            @NotNull
            private final String scanPdf417;
            @NotNull
            private final String scanSignature;
            private final String title;

            @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Creator implements Parcelable.Creator<CapturePage> {
                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final CapturePage createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    return new CapturePage(parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString());
                }

                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final CapturePage[] newArray(int i10) {
                    return new CapturePage[i10];
                }
            }

            public CapturePage(String str, @NotNull String scanFront, @NotNull String scanBack, @NotNull String scanPdf417, @NotNull String scanFrontOrBack, @NotNull String scanSignature, @NotNull String capturing, @NotNull String confirmCapture, String str2, String str3, String str4, String str5, String str6, String str7, String str8, String str9, String str10, String str11, String str12, String str13, String str14, String str15, String str16, String str17) {
                Intrinsics.checkNotNullParameter(scanFront, "scanFront");
                Intrinsics.checkNotNullParameter(scanBack, "scanBack");
                Intrinsics.checkNotNullParameter(scanPdf417, "scanPdf417");
                Intrinsics.checkNotNullParameter(scanFrontOrBack, "scanFrontOrBack");
                Intrinsics.checkNotNullParameter(scanSignature, "scanSignature");
                Intrinsics.checkNotNullParameter(capturing, "capturing");
                Intrinsics.checkNotNullParameter(confirmCapture, "confirmCapture");
                this.title = str;
                this.scanFront = scanFront;
                this.scanBack = scanBack;
                this.scanPdf417 = scanPdf417;
                this.scanFrontOrBack = scanFrontOrBack;
                this.scanSignature = scanSignature;
                this.capturing = capturing;
                this.confirmCapture = confirmCapture;
                this.disclaimer = str2;
                this.hintHoldStill = str3;
                this.hintLowLight = str4;
                this.btnHelp = str5;
                this.barcodeHelpModalTitle = str6;
                this.barcodeHelpModalPrompt = str7;
                this.barcodeHelpModalHints = str8;
                this.barcodeHelpModalContinueBtn = str9;
                this.idFrontHelpModalTitle = str10;
                this.idFrontHelpModalPrompt = str11;
                this.idFrontHelpModalHintsMobile = str12;
                this.idFrontHelpModalContinueBtn = str13;
                this.idBackHelpModalTitle = str14;
                this.idBackHelpModalPrompt = str15;
                this.idBackHelpModalHintsMobile = str16;
                this.idBackHelpModalContinueBtn = str17;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public final String getBarcodeHelpModalContinueBtn() {
                return this.barcodeHelpModalContinueBtn;
            }

            public final String getBarcodeHelpModalHints() {
                return this.barcodeHelpModalHints;
            }

            public final String getBarcodeHelpModalPrompt() {
                return this.barcodeHelpModalPrompt;
            }

            public final String getBarcodeHelpModalTitle() {
                return this.barcodeHelpModalTitle;
            }

            public final String getBtnHelp() {
                return this.btnHelp;
            }

            @NotNull
            public final String getCapturing() {
                return this.capturing;
            }

            @NotNull
            public final String getConfirmCapture() {
                return this.confirmCapture;
            }

            public final String getDisclaimer() {
                return this.disclaimer;
            }

            public final String getHintHoldStill() {
                return this.hintHoldStill;
            }

            public final String getHintLowLight() {
                return this.hintLowLight;
            }

            public final String getIdBackHelpModalContinueBtn() {
                return this.idBackHelpModalContinueBtn;
            }

            public final String getIdBackHelpModalHintsMobile() {
                return this.idBackHelpModalHintsMobile;
            }

            public final String getIdBackHelpModalPrompt() {
                return this.idBackHelpModalPrompt;
            }

            public final String getIdBackHelpModalTitle() {
                return this.idBackHelpModalTitle;
            }

            public final String getIdFrontHelpModalContinueBtn() {
                return this.idFrontHelpModalContinueBtn;
            }

            public final String getIdFrontHelpModalHintsMobile() {
                return this.idFrontHelpModalHintsMobile;
            }

            public final String getIdFrontHelpModalPrompt() {
                return this.idFrontHelpModalPrompt;
            }

            public final String getIdFrontHelpModalTitle() {
                return this.idFrontHelpModalTitle;
            }

            @NotNull
            public final String getScanBack() {
                return this.scanBack;
            }

            @NotNull
            public final String getScanFront() {
                return this.scanFront;
            }

            @NotNull
            public final String getScanFrontOrBack() {
                return this.scanFrontOrBack;
            }

            @NotNull
            public final String getScanPdf417() {
                return this.scanPdf417;
            }

            @NotNull
            public final String getScanSignature() {
                return this.scanSignature;
            }

            public final String getTitle() {
                return this.title;
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(@NotNull Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.title);
                dest.writeString(this.scanFront);
                dest.writeString(this.scanBack);
                dest.writeString(this.scanPdf417);
                dest.writeString(this.scanFrontOrBack);
                dest.writeString(this.scanSignature);
                dest.writeString(this.capturing);
                dest.writeString(this.confirmCapture);
                dest.writeString(this.disclaimer);
                dest.writeString(this.hintHoldStill);
                dest.writeString(this.hintLowLight);
                dest.writeString(this.btnHelp);
                dest.writeString(this.barcodeHelpModalTitle);
                dest.writeString(this.barcodeHelpModalPrompt);
                dest.writeString(this.barcodeHelpModalHints);
                dest.writeString(this.barcodeHelpModalContinueBtn);
                dest.writeString(this.idFrontHelpModalTitle);
                dest.writeString(this.idFrontHelpModalPrompt);
                dest.writeString(this.idFrontHelpModalHintsMobile);
                dest.writeString(this.idFrontHelpModalContinueBtn);
                dest.writeString(this.idBackHelpModalTitle);
                dest.writeString(this.idBackHelpModalPrompt);
                dest.writeString(this.idBackHelpModalHintsMobile);
                dest.writeString(this.idBackHelpModalContinueBtn);
            }
        }

        @i(generateAdapter = true)
        @Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\t\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0007\u0018\u00002\u00020\u0001B%\u0012\b\b\u0001\u0010\u0002\u001a\u00020\u0003\u0012\b\b\u0001\u0010\u0004\u001a\u00020\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u0006\u0010\u0007J\u0006\u0010\f\u001a\u00020\rJ\u0016\u0010\u000e\u001a\u00020\u000f2\u0006\u0010\u0010\u001a\u00020\u00112\u0006\u0010\u0012\u001a\u00020\rR\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\b\u0010\tR\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\tR\u0013\u0010\u0005\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\t¨\u0006\u0013"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$CheckPage;", "Landroid/os/Parcelable;", "buttonSubmit", "", "buttonRetake", "titleConfirmCapture", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", "getButtonSubmit", "()Ljava/lang/String;", "getButtonRetake", "getTitleConfirmCapture", "describeContents", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class CheckPage implements Parcelable {
            @NotNull
            public static final Parcelable.Creator<CheckPage> CREATOR = new Creator();
            @NotNull
            private final String buttonRetake;
            @NotNull
            private final String buttonSubmit;
            private final String titleConfirmCapture;

            @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Creator implements Parcelable.Creator<CheckPage> {
                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final CheckPage createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    return new CheckPage(parcel.readString(), parcel.readString(), parcel.readString());
                }

                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final CheckPage[] newArray(int i10) {
                    return new CheckPage[i10];
                }
            }

            public CheckPage(@g(name = "btnSubmit") @NotNull String buttonSubmit, @g(name = "btnRetake") @NotNull String buttonRetake, String str) {
                Intrinsics.checkNotNullParameter(buttonSubmit, "buttonSubmit");
                Intrinsics.checkNotNullParameter(buttonRetake, "buttonRetake");
                this.buttonSubmit = buttonSubmit;
                this.buttonRetake = buttonRetake;
                this.titleConfirmCapture = str;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            @NotNull
            public final String getButtonRetake() {
                return this.buttonRetake;
            }

            @NotNull
            public final String getButtonSubmit() {
                return this.buttonSubmit;
            }

            public final String getTitleConfirmCapture() {
                return this.titleConfirmCapture;
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(@NotNull Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.buttonSubmit);
                dest.writeString(this.buttonRetake);
                dest.writeString(this.titleConfirmCapture);
            }
        }

        @i(generateAdapter = true)
        @Metadata(d1 = {"\u0000t\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\t\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b%\b\u0007\u0018\u00002\u00020\u0001Bé\u0001\u0012\u000e\u0010\u0002\u001a\n\u0012\u0004\u0012\u00020\u0004\u0018\u00010\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0006\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\u0006\u0012\u0006\u0010\b\u001a\u00020\t\u0012\u000e\u0010\n\u001a\n\u0012\u0004\u0012\u00020\u000b\u0018\u00010\u0003\u0012\b\u0010\f\u001a\u0004\u0018\u00010\r\u0012\b\u0010\u000e\u001a\u0004\u0018\u00010\u000f\u0012\u0006\u0010\u0010\u001a\u00020\u0011\u0012\u0006\u0010\u0012\u001a\u00020\u0011\u0012\u000e\u0010\u0013\u001a\n\u0012\u0004\u0012\u00020\u0014\u0018\u00010\u0003\u0012\b\u0010\u0015\u001a\u0004\u0018\u00010\u0006\u0012\u000e\u0010\u0016\u001a\n\u0012\u0004\u0012\u00020\u0017\u0018\u00010\u0003\u0012\u000e\u0010\u0018\u001a\n\u0012\u0004\u0012\u00020\u0019\u0018\u00010\u0003\u0012\n\b\u0001\u0010\u001a\u001a\u0004\u0018\u00010\u0011\u0012\b\u0010\u001b\u001a\u0004\u0018\u00010\u001c\u0012\b\u0010\u001d\u001a\u0004\u0018\u00010\u001e\u0012\b\u0010\u001f\u001a\u0004\u0018\u00010 \u0012\b\u0010!\u001a\u0004\u0018\u00010\"\u0012\b\u0010#\u001a\u0004\u0018\u00010\u0006\u0012\b\u0010$\u001a\u0004\u0018\u00010%¢\u0006\u0004\b&\u0010'R\u0019\u0010\u0002\u001a\n\u0012\u0004\u0012\u00020\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b(\u0010)R\u0015\u0010\u0005\u001a\u0004\u0018\u00010\u0006¢\u0006\n\n\u0002\u0010,\u001a\u0004\b*\u0010+R\u0015\u0010\u0007\u001a\u0004\u0018\u00010\u0006¢\u0006\n\n\u0002\u0010,\u001a\u0004\b-\u0010+R\u0011\u0010\b\u001a\u00020\t¢\u0006\b\n\u0000\u001a\u0004\b.\u0010/R\u0019\u0010\n\u001a\n\u0012\u0004\u0012\u00020\u000b\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b0\u0010)R\u0015\u0010\f\u001a\u0004\u0018\u00010\r¢\u0006\n\n\u0002\u00103\u001a\u0004\b1\u00102R\u0015\u0010\u000e\u001a\u0004\u0018\u00010\u000f¢\u0006\n\n\u0002\u00106\u001a\u0004\b4\u00105R\u0011\u0010\u0010\u001a\u00020\u0011¢\u0006\b\n\u0000\u001a\u0004\b7\u00108R\u0011\u0010\u0012\u001a\u00020\u0011¢\u0006\b\n\u0000\u001a\u0004\b9\u00108R\u0019\u0010\u0013\u001a\n\u0012\u0004\u0012\u00020\u0014\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b:\u0010)R\u0015\u0010\u0015\u001a\u0004\u0018\u00010\u0006¢\u0006\n\n\u0002\u0010,\u001a\u0004\b;\u0010+R\u0019\u0010\u0016\u001a\n\u0012\u0004\u0012\u00020\u0017\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b<\u0010)R\u0019\u0010\u0018\u001a\n\u0012\u0004\u0012\u00020\u0019\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b=\u0010)R\u0013\u0010\u001a\u001a\u0004\u0018\u00010\u0011¢\u0006\b\n\u0000\u001a\u0004\b>\u00108R\u0013\u0010\u001b\u001a\u0004\u0018\u00010\u001c¢\u0006\b\n\u0000\u001a\u0004\b?\u0010@R\u0013\u0010\u001d\u001a\u0004\u0018\u00010\u001e¢\u0006\b\n\u0000\u001a\u0004\bA\u0010BR\u0013\u0010\u001f\u001a\u0004\u0018\u00010 ¢\u0006\b\n\u0000\u001a\u0004\bC\u0010DR\u0013\u0010!\u001a\u0004\u0018\u00010\"¢\u0006\b\n\u0000\u001a\u0004\bE\u0010FR\u0015\u0010#\u001a\u0004\u0018\u00010\u0006¢\u0006\n\n\u0002\u0010,\u001a\u0004\bG\u0010+R\u0013\u0010$\u001a\u0004\u0018\u00010%¢\u0006\b\n\u0000\u001a\u0004\bH\u0010I¨\u0006J"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$Config;", "", "idclasses", "", "Lcom/withpersona/sdk2/inquiry/network/dto/government_id/Id;", "backStepEnabled", "", "cancelButtonEnabled", "localizations", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$Localizations;", "enabledCaptureOptionsNativeMobile", "Lcom/withpersona/sdk2/inquiry/network/dto/government_id/CaptureOptionNativeMobile;", "imageCaptureCount", "", "nativeMobileCameraManualCaptureDelayMs", "", "fieldKeyDocument", "", "fieldKeyIdclass", "localizationOverrides", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$LocalizationOverride;", "shouldSkipReviewScreen", "enabledCaptureFileTypes", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$CaptureFileType;", "videoCaptureMethods", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$VideoCaptureMethod;", "videoSessionJwt", "assets", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$AssetConfig;", "autoClassificationConfig", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$AutoClassificationConfig;", "reviewCaptureButtonsAxis", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$Axis;", "pendingPageTextVerticalPosition", "Lcom/withpersona/sdk2/inquiry/network/dto/PendingPageTextPosition;", "audioEnabled", "mobileDriversLicense", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$DigitalIdConfig;", "<init>", "(Ljava/util/List;Ljava/lang/Boolean;Ljava/lang/Boolean;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$Localizations;Ljava/util/List;Ljava/lang/Integer;Ljava/lang/Long;Ljava/lang/String;Ljava/lang/String;Ljava/util/List;Ljava/lang/Boolean;Ljava/util/List;Ljava/util/List;Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$AssetConfig;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$AutoClassificationConfig;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$Axis;Lcom/withpersona/sdk2/inquiry/network/dto/PendingPageTextPosition;Ljava/lang/Boolean;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$DigitalIdConfig;)V", "getIdclasses", "()Ljava/util/List;", "getBackStepEnabled", "()Ljava/lang/Boolean;", "Ljava/lang/Boolean;", "getCancelButtonEnabled", "getLocalizations", "()Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$Localizations;", "getEnabledCaptureOptionsNativeMobile", "getImageCaptureCount", "()Ljava/lang/Integer;", "Ljava/lang/Integer;", "getNativeMobileCameraManualCaptureDelayMs", "()Ljava/lang/Long;", "Ljava/lang/Long;", "getFieldKeyDocument", "()Ljava/lang/String;", "getFieldKeyIdclass", "getLocalizationOverrides", "getShouldSkipReviewScreen", "getEnabledCaptureFileTypes", "getVideoCaptureMethods", "getVideoSessionJwt", "getAssets", "()Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$AssetConfig;", "getAutoClassificationConfig", "()Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$AutoClassificationConfig;", "getReviewCaptureButtonsAxis", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$Axis;", "getPendingPageTextVerticalPosition", "()Lcom/withpersona/sdk2/inquiry/network/dto/PendingPageTextPosition;", "getAudioEnabled", "getMobileDriversLicense", "()Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$DigitalIdConfig;", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Config {
            private final AssetConfig assets;
            private final Boolean audioEnabled;
            private final AutoClassificationConfig autoClassificationConfig;
            private final Boolean backStepEnabled;
            private final Boolean cancelButtonEnabled;
            private final List<CaptureFileType> enabledCaptureFileTypes;
            private final List<CaptureOptionNativeMobile> enabledCaptureOptionsNativeMobile;
            @NotNull
            private final String fieldKeyDocument;
            @NotNull
            private final String fieldKeyIdclass;
            private final List<Id> idclasses;
            private final Integer imageCaptureCount;
            private final List<LocalizationOverride> localizationOverrides;
            @NotNull
            private final Localizations localizations;
            private final DigitalIdConfig mobileDriversLicense;
            private final Long nativeMobileCameraManualCaptureDelayMs;
            private final PendingPageTextPosition pendingPageTextVerticalPosition;
            private final StyleElements.Axis reviewCaptureButtonsAxis;
            private final Boolean shouldSkipReviewScreen;
            private final List<VideoCaptureMethod> videoCaptureMethods;
            private final String videoSessionJwt;

            /* JADX WARN: Multi-variable type inference failed */
            public Config(List<Id> list, Boolean bool, Boolean bool2, @NotNull Localizations localizations, List<? extends CaptureOptionNativeMobile> list2, Integer num, Long l10, @NotNull String fieldKeyDocument, @NotNull String fieldKeyIdclass, List<LocalizationOverride> list3, Boolean bool3, List<? extends CaptureFileType> list4, List<? extends VideoCaptureMethod> list5, @g(name = "videoSessionJWT") String str, AssetConfig assetConfig, AutoClassificationConfig autoClassificationConfig, StyleElements.Axis axis, PendingPageTextPosition pendingPageTextPosition, Boolean bool4, DigitalIdConfig digitalIdConfig) {
                Intrinsics.checkNotNullParameter(localizations, "localizations");
                Intrinsics.checkNotNullParameter(fieldKeyDocument, "fieldKeyDocument");
                Intrinsics.checkNotNullParameter(fieldKeyIdclass, "fieldKeyIdclass");
                this.idclasses = list;
                this.backStepEnabled = bool;
                this.cancelButtonEnabled = bool2;
                this.localizations = localizations;
                this.enabledCaptureOptionsNativeMobile = list2;
                this.imageCaptureCount = num;
                this.nativeMobileCameraManualCaptureDelayMs = l10;
                this.fieldKeyDocument = fieldKeyDocument;
                this.fieldKeyIdclass = fieldKeyIdclass;
                this.localizationOverrides = list3;
                this.shouldSkipReviewScreen = bool3;
                this.enabledCaptureFileTypes = list4;
                this.videoCaptureMethods = list5;
                this.videoSessionJwt = str;
                this.assets = assetConfig;
                this.autoClassificationConfig = autoClassificationConfig;
                this.reviewCaptureButtonsAxis = axis;
                this.pendingPageTextVerticalPosition = pendingPageTextPosition;
                this.audioEnabled = bool4;
                this.mobileDriversLicense = digitalIdConfig;
            }

            public final AssetConfig getAssets() {
                return this.assets;
            }

            public final Boolean getAudioEnabled() {
                return this.audioEnabled;
            }

            public final AutoClassificationConfig getAutoClassificationConfig() {
                return this.autoClassificationConfig;
            }

            public final Boolean getBackStepEnabled() {
                return this.backStepEnabled;
            }

            public final Boolean getCancelButtonEnabled() {
                return this.cancelButtonEnabled;
            }

            public final List<CaptureFileType> getEnabledCaptureFileTypes() {
                return this.enabledCaptureFileTypes;
            }

            public final List<CaptureOptionNativeMobile> getEnabledCaptureOptionsNativeMobile() {
                return this.enabledCaptureOptionsNativeMobile;
            }

            @NotNull
            public final String getFieldKeyDocument() {
                return this.fieldKeyDocument;
            }

            @NotNull
            public final String getFieldKeyIdclass() {
                return this.fieldKeyIdclass;
            }

            public final List<Id> getIdclasses() {
                return this.idclasses;
            }

            public final Integer getImageCaptureCount() {
                return this.imageCaptureCount;
            }

            public final List<LocalizationOverride> getLocalizationOverrides() {
                return this.localizationOverrides;
            }

            @NotNull
            public final Localizations getLocalizations() {
                return this.localizations;
            }

            public final DigitalIdConfig getMobileDriversLicense() {
                return this.mobileDriversLicense;
            }

            public final Long getNativeMobileCameraManualCaptureDelayMs() {
                return this.nativeMobileCameraManualCaptureDelayMs;
            }

            public final PendingPageTextPosition getPendingPageTextVerticalPosition() {
                return this.pendingPageTextVerticalPosition;
            }

            public final StyleElements.Axis getReviewCaptureButtonsAxis() {
                return this.reviewCaptureButtonsAxis;
            }

            public final Boolean getShouldSkipReviewScreen() {
                return this.shouldSkipReviewScreen;
            }

            public final List<VideoCaptureMethod> getVideoCaptureMethods() {
                return this.videoCaptureMethods;
            }

            public final String getVideoSessionJwt() {
                return this.videoSessionJwt;
            }
        }

        @i(generateAdapter = true)
        @Metadata(d1 = {"\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\t\b\u0007\u0018\u00002\u00020\u0001B5\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\u000e\u0010\u0006\u001a\n\u0012\u0004\u0012\u00020\b\u0018\u00010\u0007¢\u0006\u0004\b\t\u0010\nR\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\fR\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\fR\u0013\u0010\u0005\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\fR\u0019\u0010\u0006\u001a\n\u0012\u0004\u0012\u00020\b\u0018\u00010\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0010¨\u0006\u0011"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$DigitalIdConfig;", "", "merchantId", "", "nonce", "fieldKeyMobileDriversLicense", "mobileRequests", "", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$DigitalIdRequest;", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/util/List;)V", "getMerchantId", "()Ljava/lang/String;", "getNonce", "getFieldKeyMobileDriversLicense", "getMobileRequests", "()Ljava/util/List;", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class DigitalIdConfig {
            private final String fieldKeyMobileDriversLicense;
            private final String merchantId;
            private final List<DigitalIdRequest> mobileRequests;
            private final String nonce;

            public DigitalIdConfig(String str, String str2, String str3, List<DigitalIdRequest> list) {
                this.merchantId = str;
                this.nonce = str2;
                this.fieldKeyMobileDriversLicense = str3;
                this.mobileRequests = list;
            }

            public final String getFieldKeyMobileDriversLicense() {
                return this.fieldKeyMobileDriversLicense;
            }

            public final String getMerchantId() {
                return this.merchantId;
            }

            public final List<DigitalIdRequest> getMobileRequests() {
                return this.mobileRequests;
            }

            public final String getNonce() {
                return this.nonce;
            }
        }

        @i(generateAdapter = true)
        @Metadata(d1 = {"\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010$\n\u0002\u0010\b\n\u0002\b\b\b\u0007\u0018\u00002\u00020\u0001B1\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\u0014\u0010\u0005\u001a\u0010\u0012\u0004\u0012\u00020\u0003\u0012\u0004\u0012\u00020\u0007\u0018\u00010\u0006¢\u0006\u0004\b\b\u0010\tR\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000bR\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\u000bR\u001f\u0010\u0005\u001a\u0010\u0012\u0004\u0012\u00020\u0003\u0012\u0004\u0012\u00020\u0007\u0018\u00010\u0006¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u000e¨\u0006\u000f"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$DigitalIdRequest;", "", "idType", "", "minAge", "elementToStoreLength", "", "", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/util/Map;)V", "getIdType", "()Ljava/lang/String;", "getMinAge", "getElementToStoreLength", "()Ljava/util/Map;", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class DigitalIdRequest {
            private final Map<String, Integer> elementToStoreLength;
            private final String idType;
            private final String minAge;

            public DigitalIdRequest(String str, String str2, Map<String, Integer> map) {
                this.idType = str;
                this.minAge = str2;
                this.elementToStoreLength = map;
            }

            public final Map<String, Integer> getElementToStoreLength() {
                return this.elementToStoreLength;
            }

            public final String getIdType() {
                return this.idType;
            }

            public final String getMinAge() {
                return this.minAge;
            }
        }

        @i(generateAdapter = true)
        @Metadata(d1 = {"\u0000,\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000f\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u000f\n\u0002\u0010\b\n\u0002\b\n\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0007\u0018\u00002\u00020\u00012\b\u0012\u0004\u0012\u00020\u00000\u0002B=\u0012\b\u0010\u0003\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0004\u0012\u0006\u0010\u0007\u001a\u00020\u0004\u0012\u0006\u0010\b\u001a\u00020\u0004\u0012\u0006\u0010\t\u001a\u00020\u0004¢\u0006\u0004\b\n\u0010\u000bJ\u0011\u0010\u001b\u001a\u00020\u00142\u0006\u0010\u001c\u001a\u00020\u0000H\u0096\u0002J\u0006\u0010\u001d\u001a\u00020\u0014J\u0016\u0010\u001e\u001a\u00020\u001f2\u0006\u0010 \u001a\u00020!2\u0006\u0010\"\u001a\u00020\u0014R\u0013\u0010\u0003\u001a\u0004\u0018\u00010\u0004¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\rR\u0013\u0010\u0005\u001a\u0004\u0018\u00010\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\rR\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\rR\u0011\u0010\u0007\u001a\u00020\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\rR\u0011\u0010\b\u001a\u00020\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\rR\u0011\u0010\t\u001a\u00020\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\rR!\u0010\u0013\u001a\u00020\u00148FX\u0086\u0084\u0002¢\u0006\u0012\n\u0004\b\u0019\u0010\u001a\u0012\u0004\b\u0015\u0010\u0016\u001a\u0004\b\u0017\u0010\u0018¨\u0006#"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$LocalizationOverride;", "Landroid/os/Parcelable;", "", "countryCode", "", "idClass", "side", "page", "key", "text", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", "getCountryCode", "()Ljava/lang/String;", "getIdClass", "getSide", "getPage", "getKey", "getText", "precedenceScore", "", "getPrecedenceScore$annotations", "()V", "getPrecedenceScore", "()I", "precedenceScore$delegate", "Lkotlin/Lazy;", "compareTo", "other", "describeContents", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        @SourceDebugExtension({"SMAP\nNextStep.kt\nKotlin\n*S Kotlin\n*F\n+ 1 NextStep.kt\ncom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$LocalizationOverride\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,853:1\n1#2:854\n*E\n"})
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class LocalizationOverride implements Parcelable, Comparable<LocalizationOverride> {
            @NotNull
            public static final Parcelable.Creator<LocalizationOverride> CREATOR = new Creator();
            private final String countryCode;
            private final String idClass;
            @NotNull
            private final String key;
            @NotNull
            private final String page;
            @NotNull
            private final Lazy precedenceScore$delegate;
            private final String side;
            @NotNull
            private final String text;

            @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Creator implements Parcelable.Creator<LocalizationOverride> {
                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final LocalizationOverride createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    return new LocalizationOverride(parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString());
                }

                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final LocalizationOverride[] newArray(int i10) {
                    return new LocalizationOverride[i10];
                }
            }

            public LocalizationOverride(String str, String str2, String str3, @NotNull String page, @NotNull String key, @NotNull String text) {
                Intrinsics.checkNotNullParameter(page, "page");
                Intrinsics.checkNotNullParameter(key, "key");
                Intrinsics.checkNotNullParameter(text, "text");
                this.countryCode = str;
                this.idClass = str2;
                this.side = str3;
                this.page = page;
                this.key = key;
                this.text = text;
                this.precedenceScore$delegate = l.a(new Function0() { // from class: com.withpersona.sdk2.inquiry.network.dto.c
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        int precedenceScore_delegate$lambda$3;
                        precedenceScore_delegate$lambda$3 = NextStep.GovernmentId.LocalizationOverride.precedenceScore_delegate$lambda$3(NextStep.GovernmentId.LocalizationOverride.this);
                        return Integer.valueOf(precedenceScore_delegate$lambda$3);
                    }
                });
            }

            public static /* synthetic */ void getPrecedenceScore$annotations() {
            }

            /* JADX INFO: Access modifiers changed from: private */
            public static final int precedenceScore_delegate$lambda$3(LocalizationOverride localizationOverride) {
                int i10;
                if (localizationOverride.countryCode != null) {
                    i10 = 1;
                } else {
                    i10 = 0;
                }
                int i11 = i10 * 2;
                if (localizationOverride.idClass != null) {
                    i11++;
                }
                int i12 = i11 * 2;
                if (localizationOverride.side != null) {
                    return i12 + 1;
                }
                return i12;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public final String getCountryCode() {
                return this.countryCode;
            }

            public final String getIdClass() {
                return this.idClass;
            }

            @NotNull
            public final String getKey() {
                return this.key;
            }

            @NotNull
            public final String getPage() {
                return this.page;
            }

            public final int getPrecedenceScore() {
                return ((Number) this.precedenceScore$delegate.getValue()).intValue();
            }

            public final String getSide() {
                return this.side;
            }

            @NotNull
            public final String getText() {
                return this.text;
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(@NotNull Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.countryCode);
                dest.writeString(this.idClass);
                dest.writeString(this.side);
                dest.writeString(this.page);
                dest.writeString(this.key);
                dest.writeString(this.text);
            }

            @Override // java.lang.Comparable
            public int compareTo(@NotNull LocalizationOverride other) {
                Intrinsics.checkNotNullParameter(other, "other");
                return Intrinsics.compare(getPrecedenceScore(), other.getPrecedenceScore());
            }
        }

        @i(generateAdapter = true)
        @Metadata(d1 = {"\u0000V\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0015\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0007\u0018\u00002\u00020\u0001BS\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\u0006\u0010\b\u001a\u00020\t\u0012\u0006\u0010\n\u001a\u00020\u000b\u0012\u0006\u0010\f\u001a\u00020\r\u0012\u0006\u0010\u000e\u001a\u00020\u000f\u0012\b\u0010\u0010\u001a\u0004\u0018\u00010\u0011\u0012\b\u0010\u0012\u001a\u0004\u0018\u00010\u0013¢\u0006\u0004\b\u0014\u0010\u0015J\u0006\u0010(\u001a\u00020)J\u0016\u0010*\u001a\u00020+2\u0006\u0010,\u001a\u00020-2\u0006\u0010.\u001a\u00020)R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0016\u0010\u0017R\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0018\u0010\u0019R\u0011\u0010\u0006\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u001a\u0010\u001bR\u0011\u0010\b\u001a\u00020\t¢\u0006\b\n\u0000\u001a\u0004\b\u001c\u0010\u001dR\u0011\u0010\n\u001a\u00020\u000b¢\u0006\b\n\u0000\u001a\u0004\b\u001e\u0010\u001fR\u0011\u0010\f\u001a\u00020\r¢\u0006\b\n\u0000\u001a\u0004\b \u0010!R\u0011\u0010\u000e\u001a\u00020\u000f¢\u0006\b\n\u0000\u001a\u0004\b\"\u0010#R\u0013\u0010\u0010\u001a\u0004\u0018\u00010\u0011¢\u0006\b\n\u0000\u001a\u0004\b$\u0010%R\u0013\u0010\u0012\u001a\u0004\u0018\u00010\u0013¢\u0006\b\n\u0000\u001a\u0004\b&\u0010'¨\u0006/"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$Localizations;", "Landroid/os/Parcelable;", "selectPage", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$SelectPage;", "promptPage", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$PromptPage;", "capturePage", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$CapturePage;", "checkPage", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$CheckPage;", "pendingPage", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$PendingPage;", "requestPage", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$RequestPage;", "reviewUploadPage", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$ReviewUploadPage;", "cancelDialog", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$CancelDialog;", "autoClassificationPage", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$AutoClassificationPage;", "<init>", "(Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$SelectPage;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$PromptPage;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$CapturePage;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$CheckPage;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$PendingPage;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$RequestPage;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$ReviewUploadPage;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$CancelDialog;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$AutoClassificationPage;)V", "getSelectPage", "()Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$SelectPage;", "getPromptPage", "()Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$PromptPage;", "getCapturePage", "()Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$CapturePage;", "getCheckPage", "()Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$CheckPage;", "getPendingPage", "()Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$PendingPage;", "getRequestPage", "()Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$RequestPage;", "getReviewUploadPage", "()Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$ReviewUploadPage;", "getCancelDialog", "()Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$CancelDialog;", "getAutoClassificationPage", "()Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$AutoClassificationPage;", "describeContents", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Localizations implements Parcelable {
            @NotNull
            public static final Parcelable.Creator<Localizations> CREATOR = new Creator();
            private final AutoClassificationPage autoClassificationPage;
            private final CancelDialog cancelDialog;
            @NotNull
            private final CapturePage capturePage;
            @NotNull
            private final CheckPage checkPage;
            @NotNull
            private final PendingPage pendingPage;
            @NotNull
            private final PromptPage promptPage;
            @NotNull
            private final RequestPage requestPage;
            @NotNull
            private final ReviewUploadPage reviewUploadPage;
            @NotNull
            private final SelectPage selectPage;

            @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Creator implements Parcelable.Creator<Localizations> {
                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final Localizations createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    return new Localizations(SelectPage.CREATOR.createFromParcel(parcel), PromptPage.CREATOR.createFromParcel(parcel), CapturePage.CREATOR.createFromParcel(parcel), CheckPage.CREATOR.createFromParcel(parcel), PendingPage.CREATOR.createFromParcel(parcel), RequestPage.CREATOR.createFromParcel(parcel), ReviewUploadPage.CREATOR.createFromParcel(parcel), parcel.readInt() == 0 ? null : CancelDialog.CREATOR.createFromParcel(parcel), parcel.readInt() != 0 ? AutoClassificationPage.CREATOR.createFromParcel(parcel) : null);
                }

                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final Localizations[] newArray(int i10) {
                    return new Localizations[i10];
                }
            }

            public Localizations(@NotNull SelectPage selectPage, @NotNull PromptPage promptPage, @NotNull CapturePage capturePage, @NotNull CheckPage checkPage, @NotNull PendingPage pendingPage, @NotNull RequestPage requestPage, @NotNull ReviewUploadPage reviewUploadPage, CancelDialog cancelDialog, AutoClassificationPage autoClassificationPage) {
                Intrinsics.checkNotNullParameter(selectPage, "selectPage");
                Intrinsics.checkNotNullParameter(promptPage, "promptPage");
                Intrinsics.checkNotNullParameter(capturePage, "capturePage");
                Intrinsics.checkNotNullParameter(checkPage, "checkPage");
                Intrinsics.checkNotNullParameter(pendingPage, "pendingPage");
                Intrinsics.checkNotNullParameter(requestPage, "requestPage");
                Intrinsics.checkNotNullParameter(reviewUploadPage, "reviewUploadPage");
                this.selectPage = selectPage;
                this.promptPage = promptPage;
                this.capturePage = capturePage;
                this.checkPage = checkPage;
                this.pendingPage = pendingPage;
                this.requestPage = requestPage;
                this.reviewUploadPage = reviewUploadPage;
                this.cancelDialog = cancelDialog;
                this.autoClassificationPage = autoClassificationPage;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public final AutoClassificationPage getAutoClassificationPage() {
                return this.autoClassificationPage;
            }

            public final CancelDialog getCancelDialog() {
                return this.cancelDialog;
            }

            @NotNull
            public final CapturePage getCapturePage() {
                return this.capturePage;
            }

            @NotNull
            public final CheckPage getCheckPage() {
                return this.checkPage;
            }

            @NotNull
            public final PendingPage getPendingPage() {
                return this.pendingPage;
            }

            @NotNull
            public final PromptPage getPromptPage() {
                return this.promptPage;
            }

            @NotNull
            public final RequestPage getRequestPage() {
                return this.requestPage;
            }

            @NotNull
            public final ReviewUploadPage getReviewUploadPage() {
                return this.reviewUploadPage;
            }

            @NotNull
            public final SelectPage getSelectPage() {
                return this.selectPage;
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(@NotNull Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                this.selectPage.writeToParcel(dest, i10);
                this.promptPage.writeToParcel(dest, i10);
                this.capturePage.writeToParcel(dest, i10);
                this.checkPage.writeToParcel(dest, i10);
                this.pendingPage.writeToParcel(dest, i10);
                this.requestPage.writeToParcel(dest, i10);
                this.reviewUploadPage.writeToParcel(dest, i10);
                CancelDialog cancelDialog = this.cancelDialog;
                if (cancelDialog == null) {
                    dest.writeInt(0);
                } else {
                    dest.writeInt(1);
                    cancelDialog.writeToParcel(dest, i10);
                }
                AutoClassificationPage autoClassificationPage = this.autoClassificationPage;
                if (autoClassificationPage == null) {
                    dest.writeInt(0);
                    return;
                }
                dest.writeInt(1);
                autoClassificationPage.writeToParcel(dest, i10);
            }
        }

        /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
        /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
        @i(generateAdapter = false)
        @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0007\b\u0087\u0081\u0002\u0018\u0000 \u00072\b\u0012\u0004\u0012\u00020\u00000\u0001:\u0001\u0007B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003j\u0002\b\u0004j\u0002\b\u0005j\u0002\b\u0006¨\u0006\b"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$PassportNfcOption;", "", "<init>", "(Ljava/lang/String;I)V", "REQUIRED", "OPTIONAL", "REQUIRED_IF_SUPPORTED", "Companion", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class PassportNfcOption {
            private static final /* synthetic */ EnumEntries $ENTRIES;
            private static final /* synthetic */ PassportNfcOption[] $VALUES;
            @NotNull
            public static final Companion Companion;
            public static final PassportNfcOption REQUIRED = new PassportNfcOption("REQUIRED", 0);
            public static final PassportNfcOption OPTIONAL = new PassportNfcOption("OPTIONAL", 1);
            public static final PassportNfcOption REQUIRED_IF_SUPPORTED = new PassportNfcOption("REQUIRED_IF_SUPPORTED", 2);

            @Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0003\b\u0086\u0003\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u0017\u0010\u0007\u001a\u00020\u00022\u0006\u0010\u0006\u001a\u00020\u0005H\u0017¢\u0006\u0004\b\u0007\u0010\bJ!\u0010\r\u001a\u00020\f2\u0006\u0010\n\u001a\u00020\t2\b\u0010\u000b\u001a\u0004\u0018\u00010\u0002H\u0017¢\u0006\u0004\b\r\u0010\u000e¨\u0006\u000f"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$PassportNfcOption$Companion;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$PassportNfcOption;", "<init>", "()V", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$PassportNfcOption;", "Lcom/squareup/moshi/t;", "writer", "value", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$PassportNfcOption;)V", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Companion extends h {
                public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                    this();
                }

                @Override // com.squareup.moshi.h
                @z
                public void toJson(@NotNull t writer, PassportNfcOption passportNfcOption) {
                    Intrinsics.checkNotNullParameter(writer, "writer");
                }

                private Companion() {
                }

                @Override // com.squareup.moshi.h
                @f
                @NotNull
                public PassportNfcOption fromJson(@NotNull m reader) {
                    Intrinsics.checkNotNullParameter(reader, "reader");
                    Object V = reader.V();
                    return Intrinsics.areEqual(V, "required") ? PassportNfcOption.REQUIRED : Intrinsics.areEqual(V, "optional") ? PassportNfcOption.OPTIONAL : Intrinsics.areEqual(V, "required_if_supported") ? PassportNfcOption.REQUIRED_IF_SUPPORTED : PassportNfcOption.OPTIONAL;
                }
            }

            private static final /* synthetic */ PassportNfcOption[] $values() {
                return new PassportNfcOption[]{REQUIRED, OPTIONAL, REQUIRED_IF_SUPPORTED};
            }

            static {
                PassportNfcOption[] $values = $values();
                $VALUES = $values;
                $ENTRIES = vr.a.a($values);
                Companion = new Companion(null);
            }

            private PassportNfcOption(String str, int i10) {
            }

            @NotNull
            public static EnumEntries getEntries() {
                return $ENTRIES;
            }

            public static PassportNfcOption valueOf(String str) {
                return (PassportNfcOption) Enum.valueOf(PassportNfcOption.class, str);
            }

            public static PassportNfcOption[] values() {
                return (PassportNfcOption[]) $VALUES.clone();
            }
        }

        @i(generateAdapter = true)
        @Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0007\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0007\u0018\u00002\u00020\u0001B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u0006\u0010\n\u001a\u00020\u000bJ\u0016\u0010\f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\u000f2\u0006\u0010\u0010\u001a\u00020\u000bR\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0007\u0010\bR\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\b¨\u0006\u0011"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$PendingPage;", "Landroid/os/Parcelable;", "title", "", "description", "<init>", "(Ljava/lang/String;Ljava/lang/String;)V", "getTitle", "()Ljava/lang/String;", "getDescription", "describeContents", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class PendingPage implements Parcelable {
            @NotNull
            public static final Parcelable.Creator<PendingPage> CREATOR = new Creator();
            @NotNull
            private final String description;
            @NotNull
            private final String title;

            @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Creator implements Parcelable.Creator<PendingPage> {
                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final PendingPage createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    return new PendingPage(parcel.readString(), parcel.readString());
                }

                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final PendingPage[] newArray(int i10) {
                    return new PendingPage[i10];
                }
            }

            public PendingPage(@NotNull String title, @NotNull String description) {
                Intrinsics.checkNotNullParameter(title, "title");
                Intrinsics.checkNotNullParameter(description, "description");
                this.title = title;
                this.description = description;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            @NotNull
            public final String getDescription() {
                return this.description;
            }

            @NotNull
            public final String getTitle() {
                return this.title;
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(@NotNull Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.title);
                dest.writeString(this.description);
            }
        }

        @i(generateAdapter = true)
        @Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0013\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0007\u0018\u00002\u00020\u0001B[\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0001\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0001\u0010\u0006\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\b\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\t\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u000b\u0010\fJ\u0006\u0010\u0016\u001a\u00020\u0017J\u0016\u0010\u0018\u001a\u00020\u00192\u0006\u0010\u001a\u001a\u00020\u001b2\u0006\u0010\u001c\u001a\u00020\u0017R\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u000eR\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u000eR\u0013\u0010\u0005\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u000eR\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u000eR\u0013\u0010\u0007\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u000eR\u0013\u0010\b\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\u000eR\u0013\u0010\t\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u000eR\u0013\u0010\n\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u000e¨\u0006\u001d"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$PromptPage;", "Landroid/os/Parcelable;", "cameraPermissionsTitle", "", "cameraPermissionsPrompt", "cameraPermissionsAllowButtonText", "cameraPermissionsCancelButtonText", "microphonePermissionsBtnCancel", "microphonePermissionsBtnContinueMobile", "microphonePermissionsPrompt", "microphonePermissionsTitle", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", "getCameraPermissionsTitle", "()Ljava/lang/String;", "getCameraPermissionsPrompt", "getCameraPermissionsAllowButtonText", "getCameraPermissionsCancelButtonText", "getMicrophonePermissionsBtnCancel", "getMicrophonePermissionsBtnContinueMobile", "getMicrophonePermissionsPrompt", "getMicrophonePermissionsTitle", "describeContents", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class PromptPage implements Parcelable {
            @NotNull
            public static final Parcelable.Creator<PromptPage> CREATOR = new Creator();
            private final String cameraPermissionsAllowButtonText;
            private final String cameraPermissionsCancelButtonText;
            private final String cameraPermissionsPrompt;
            private final String cameraPermissionsTitle;
            private final String microphonePermissionsBtnCancel;
            private final String microphonePermissionsBtnContinueMobile;
            private final String microphonePermissionsPrompt;
            private final String microphonePermissionsTitle;

            @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Creator implements Parcelable.Creator<PromptPage> {
                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final PromptPage createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    return new PromptPage(parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString());
                }

                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final PromptPage[] newArray(int i10) {
                    return new PromptPage[i10];
                }
            }

            public PromptPage(String str, String str2, @g(name = "cameraPermissionsBtnContinueMobile") String str3, @g(name = "cameraPermissionsBtnCancel") String str4, String str5, String str6, String str7, String str8) {
                this.cameraPermissionsTitle = str;
                this.cameraPermissionsPrompt = str2;
                this.cameraPermissionsAllowButtonText = str3;
                this.cameraPermissionsCancelButtonText = str4;
                this.microphonePermissionsBtnCancel = str5;
                this.microphonePermissionsBtnContinueMobile = str6;
                this.microphonePermissionsPrompt = str7;
                this.microphonePermissionsTitle = str8;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public final String getCameraPermissionsAllowButtonText() {
                return this.cameraPermissionsAllowButtonText;
            }

            public final String getCameraPermissionsCancelButtonText() {
                return this.cameraPermissionsCancelButtonText;
            }

            public final String getCameraPermissionsPrompt() {
                return this.cameraPermissionsPrompt;
            }

            public final String getCameraPermissionsTitle() {
                return this.cameraPermissionsTitle;
            }

            public final String getMicrophonePermissionsBtnCancel() {
                return this.microphonePermissionsBtnCancel;
            }

            public final String getMicrophonePermissionsBtnContinueMobile() {
                return this.microphonePermissionsBtnContinueMobile;
            }

            public final String getMicrophonePermissionsPrompt() {
                return this.microphonePermissionsPrompt;
            }

            public final String getMicrophonePermissionsTitle() {
                return this.microphonePermissionsTitle;
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(@NotNull Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.cameraPermissionsTitle);
                dest.writeString(this.cameraPermissionsPrompt);
                dest.writeString(this.cameraPermissionsAllowButtonText);
                dest.writeString(this.cameraPermissionsCancelButtonText);
                dest.writeString(this.microphonePermissionsBtnCancel);
                dest.writeString(this.microphonePermissionsBtnContinueMobile);
                dest.writeString(this.microphonePermissionsPrompt);
                dest.writeString(this.microphonePermissionsTitle);
            }
        }

        @i(generateAdapter = true)
        @Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0017\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0007\u0018\u00002\u00020\u0001BW\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0003\u0012\u0006\u0010\u0007\u001a\u00020\u0003\u0012\u0006\u0010\b\u001a\u00020\u0003\u0012\u0006\u0010\t\u001a\u00020\u0003\u0012\u0006\u0010\n\u001a\u00020\u0003\u0012\u0006\u0010\u000b\u001a\u00020\u0003\u0012\u0006\u0010\f\u001a\u00020\u0003¢\u0006\u0004\b\r\u0010\u000eJ\u0006\u0010\u001a\u001a\u00020\u001bJ\u0016\u0010\u001c\u001a\u00020\u001d2\u0006\u0010\u001e\u001a\u00020\u001f2\u0006\u0010 \u001a\u00020\u001bR\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0010R\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u0010R\u0011\u0010\u0005\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0010R\u0011\u0010\u0006\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\u0010R\u0011\u0010\u0007\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u0010R\u0011\u0010\b\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u0010R\u0011\u0010\t\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0016\u0010\u0010R\u0011\u0010\n\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0017\u0010\u0010R\u0011\u0010\u000b\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0018\u0010\u0010R\u0011\u0010\f\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0019\u0010\u0010¨\u0006!"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$RequestPage;", "Landroid/os/Parcelable;", "titleFront", "", "titleBack", "titlePdf417", "titlePassportSignature", "descriptionFront", "descriptionBack", "descriptionPdf417", "descriptionPassportSignature", "choosePhotoButtonText", "liveUploadButtonText", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", "getTitleFront", "()Ljava/lang/String;", "getTitleBack", "getTitlePdf417", "getTitlePassportSignature", "getDescriptionFront", "getDescriptionBack", "getDescriptionPdf417", "getDescriptionPassportSignature", "getChoosePhotoButtonText", "getLiveUploadButtonText", "describeContents", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RequestPage implements Parcelable {
            @NotNull
            public static final Parcelable.Creator<RequestPage> CREATOR = new Creator();
            @NotNull
            private final String choosePhotoButtonText;
            @NotNull
            private final String descriptionBack;
            @NotNull
            private final String descriptionFront;
            @NotNull
            private final String descriptionPassportSignature;
            @NotNull
            private final String descriptionPdf417;
            @NotNull
            private final String liveUploadButtonText;
            @NotNull
            private final String titleBack;
            @NotNull
            private final String titleFront;
            @NotNull
            private final String titlePassportSignature;
            @NotNull
            private final String titlePdf417;

            @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Creator implements Parcelable.Creator<RequestPage> {
                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final RequestPage createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    return new RequestPage(parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString());
                }

                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final RequestPage[] newArray(int i10) {
                    return new RequestPage[i10];
                }
            }

            public RequestPage(@NotNull String titleFront, @NotNull String titleBack, @NotNull String titlePdf417, @NotNull String titlePassportSignature, @NotNull String descriptionFront, @NotNull String descriptionBack, @NotNull String descriptionPdf417, @NotNull String descriptionPassportSignature, @NotNull String choosePhotoButtonText, @NotNull String liveUploadButtonText) {
                Intrinsics.checkNotNullParameter(titleFront, "titleFront");
                Intrinsics.checkNotNullParameter(titleBack, "titleBack");
                Intrinsics.checkNotNullParameter(titlePdf417, "titlePdf417");
                Intrinsics.checkNotNullParameter(titlePassportSignature, "titlePassportSignature");
                Intrinsics.checkNotNullParameter(descriptionFront, "descriptionFront");
                Intrinsics.checkNotNullParameter(descriptionBack, "descriptionBack");
                Intrinsics.checkNotNullParameter(descriptionPdf417, "descriptionPdf417");
                Intrinsics.checkNotNullParameter(descriptionPassportSignature, "descriptionPassportSignature");
                Intrinsics.checkNotNullParameter(choosePhotoButtonText, "choosePhotoButtonText");
                Intrinsics.checkNotNullParameter(liveUploadButtonText, "liveUploadButtonText");
                this.titleFront = titleFront;
                this.titleBack = titleBack;
                this.titlePdf417 = titlePdf417;
                this.titlePassportSignature = titlePassportSignature;
                this.descriptionFront = descriptionFront;
                this.descriptionBack = descriptionBack;
                this.descriptionPdf417 = descriptionPdf417;
                this.descriptionPassportSignature = descriptionPassportSignature;
                this.choosePhotoButtonText = choosePhotoButtonText;
                this.liveUploadButtonText = liveUploadButtonText;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            @NotNull
            public final String getChoosePhotoButtonText() {
                return this.choosePhotoButtonText;
            }

            @NotNull
            public final String getDescriptionBack() {
                return this.descriptionBack;
            }

            @NotNull
            public final String getDescriptionFront() {
                return this.descriptionFront;
            }

            @NotNull
            public final String getDescriptionPassportSignature() {
                return this.descriptionPassportSignature;
            }

            @NotNull
            public final String getDescriptionPdf417() {
                return this.descriptionPdf417;
            }

            @NotNull
            public final String getLiveUploadButtonText() {
                return this.liveUploadButtonText;
            }

            @NotNull
            public final String getTitleBack() {
                return this.titleBack;
            }

            @NotNull
            public final String getTitleFront() {
                return this.titleFront;
            }

            @NotNull
            public final String getTitlePassportSignature() {
                return this.titlePassportSignature;
            }

            @NotNull
            public final String getTitlePdf417() {
                return this.titlePdf417;
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(@NotNull Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.titleFront);
                dest.writeString(this.titleBack);
                dest.writeString(this.titlePdf417);
                dest.writeString(this.titlePassportSignature);
                dest.writeString(this.descriptionFront);
                dest.writeString(this.descriptionBack);
                dest.writeString(this.descriptionPdf417);
                dest.writeString(this.descriptionPassportSignature);
                dest.writeString(this.choosePhotoButtonText);
                dest.writeString(this.liveUploadButtonText);
            }
        }

        @i(generateAdapter = true)
        @Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0017\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0007\u0018\u00002\u00020\u0001BW\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0003\u0012\u0006\u0010\u0007\u001a\u00020\u0003\u0012\u0006\u0010\b\u001a\u00020\u0003\u0012\u0006\u0010\t\u001a\u00020\u0003\u0012\u0006\u0010\n\u001a\u00020\u0003\u0012\u0006\u0010\u000b\u001a\u00020\u0003\u0012\u0006\u0010\f\u001a\u00020\u0003¢\u0006\u0004\b\r\u0010\u000eJ\u0006\u0010\u001a\u001a\u00020\u001bJ\u0016\u0010\u001c\u001a\u00020\u001d2\u0006\u0010\u001e\u001a\u00020\u001f2\u0006\u0010 \u001a\u00020\u001bR\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0010R\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u0010R\u0011\u0010\u0005\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0010R\u0011\u0010\u0006\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\u0010R\u0011\u0010\u0007\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u0010R\u0011\u0010\b\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u0010R\u0011\u0010\t\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0016\u0010\u0010R\u0011\u0010\n\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0017\u0010\u0010R\u0011\u0010\u000b\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0018\u0010\u0010R\u0011\u0010\f\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0019\u0010\u0010¨\u0006!"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$ReviewUploadPage;", "Landroid/os/Parcelable;", "titleFront", "", "titleBack", "titlePdf417", "titlePassportSignature", "descriptionFront", "descriptionBack", "descriptionPdf417", "descriptionPassportSignature", "confirmButtonText", "chooseAnotherButtonText", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", "getTitleFront", "()Ljava/lang/String;", "getTitleBack", "getTitlePdf417", "getTitlePassportSignature", "getDescriptionFront", "getDescriptionBack", "getDescriptionPdf417", "getDescriptionPassportSignature", "getConfirmButtonText", "getChooseAnotherButtonText", "describeContents", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class ReviewUploadPage implements Parcelable {
            @NotNull
            public static final Parcelable.Creator<ReviewUploadPage> CREATOR = new Creator();
            @NotNull
            private final String chooseAnotherButtonText;
            @NotNull
            private final String confirmButtonText;
            @NotNull
            private final String descriptionBack;
            @NotNull
            private final String descriptionFront;
            @NotNull
            private final String descriptionPassportSignature;
            @NotNull
            private final String descriptionPdf417;
            @NotNull
            private final String titleBack;
            @NotNull
            private final String titleFront;
            @NotNull
            private final String titlePassportSignature;
            @NotNull
            private final String titlePdf417;

            @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Creator implements Parcelable.Creator<ReviewUploadPage> {
                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final ReviewUploadPage createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    return new ReviewUploadPage(parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString());
                }

                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final ReviewUploadPage[] newArray(int i10) {
                    return new ReviewUploadPage[i10];
                }
            }

            public ReviewUploadPage(@NotNull String titleFront, @NotNull String titleBack, @NotNull String titlePdf417, @NotNull String titlePassportSignature, @NotNull String descriptionFront, @NotNull String descriptionBack, @NotNull String descriptionPdf417, @NotNull String descriptionPassportSignature, @NotNull String confirmButtonText, @NotNull String chooseAnotherButtonText) {
                Intrinsics.checkNotNullParameter(titleFront, "titleFront");
                Intrinsics.checkNotNullParameter(titleBack, "titleBack");
                Intrinsics.checkNotNullParameter(titlePdf417, "titlePdf417");
                Intrinsics.checkNotNullParameter(titlePassportSignature, "titlePassportSignature");
                Intrinsics.checkNotNullParameter(descriptionFront, "descriptionFront");
                Intrinsics.checkNotNullParameter(descriptionBack, "descriptionBack");
                Intrinsics.checkNotNullParameter(descriptionPdf417, "descriptionPdf417");
                Intrinsics.checkNotNullParameter(descriptionPassportSignature, "descriptionPassportSignature");
                Intrinsics.checkNotNullParameter(confirmButtonText, "confirmButtonText");
                Intrinsics.checkNotNullParameter(chooseAnotherButtonText, "chooseAnotherButtonText");
                this.titleFront = titleFront;
                this.titleBack = titleBack;
                this.titlePdf417 = titlePdf417;
                this.titlePassportSignature = titlePassportSignature;
                this.descriptionFront = descriptionFront;
                this.descriptionBack = descriptionBack;
                this.descriptionPdf417 = descriptionPdf417;
                this.descriptionPassportSignature = descriptionPassportSignature;
                this.confirmButtonText = confirmButtonText;
                this.chooseAnotherButtonText = chooseAnotherButtonText;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            @NotNull
            public final String getChooseAnotherButtonText() {
                return this.chooseAnotherButtonText;
            }

            @NotNull
            public final String getConfirmButtonText() {
                return this.confirmButtonText;
            }

            @NotNull
            public final String getDescriptionBack() {
                return this.descriptionBack;
            }

            @NotNull
            public final String getDescriptionFront() {
                return this.descriptionFront;
            }

            @NotNull
            public final String getDescriptionPassportSignature() {
                return this.descriptionPassportSignature;
            }

            @NotNull
            public final String getDescriptionPdf417() {
                return this.descriptionPdf417;
            }

            @NotNull
            public final String getTitleBack() {
                return this.titleBack;
            }

            @NotNull
            public final String getTitleFront() {
                return this.titleFront;
            }

            @NotNull
            public final String getTitlePassportSignature() {
                return this.titlePassportSignature;
            }

            @NotNull
            public final String getTitlePdf417() {
                return this.titlePdf417;
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(@NotNull Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.titleFront);
                dest.writeString(this.titleBack);
                dest.writeString(this.titlePdf417);
                dest.writeString(this.titlePassportSignature);
                dest.writeString(this.descriptionFront);
                dest.writeString(this.descriptionBack);
                dest.writeString(this.descriptionPdf417);
                dest.writeString(this.descriptionPassportSignature);
                dest.writeString(this.confirmButtonText);
                dest.writeString(this.chooseAnotherButtonText);
            }
        }

        @i(generateAdapter = false)
        @Metadata(d1 = {"\u0000.\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0004\n\u0002\u0010$\n\u0002\b\n\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\b\u0007\u0018\u0000 \u00192\u00020\u0001:\u0001\u0019B=\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0003\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0003\u0012\u0012\u0010\u0007\u001a\u000e\u0012\u0004\u0012\u00020\u0003\u0012\u0004\u0012\u00020\u00030\b¢\u0006\u0004\b\t\u0010\nJ\u0006\u0010\u0012\u001a\u00020\u0013J\u0016\u0010\u0014\u001a\u00020\u00152\u0006\u0010\u0016\u001a\u00020\u00172\u0006\u0010\u0018\u001a\u00020\u0013R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\fR\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\fR\u0011\u0010\u0005\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\fR\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\fR\u001d\u0010\u0007\u001a\u000e\u0012\u0004\u0012\u00020\u0003\u0012\u0004\u0012\u00020\u00030\b¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u0011¨\u0006\u001a"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$SelectPage;", "Landroid/os/Parcelable;", "title", "", "prompt", "choose", "disclaimer", "idClassToName", "", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/util/Map;)V", "getTitle", "()Ljava/lang/String;", "getPrompt", "getChoose", "getDisclaimer", "getIdClassToName", "()Ljava/util/Map;", "describeContents", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "Companion", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class SelectPage implements Parcelable {
            @NotNull
            private final String choose;
            private final String disclaimer;
            @NotNull
            private final Map<String, String> idClassToName;
            @NotNull
            private final String prompt;
            @NotNull
            private final String title;
            @NotNull
            public static final Companion Companion = new Companion(null);
            @NotNull
            public static final Parcelable.Creator<SelectPage> CREATOR = new Creator();

            @Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0086\u0003\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J!\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\b\u0010\u0007\u001a\u0004\u0018\u00010\u0002H\u0017¢\u0006\u0004\b\t\u0010\nJ\u0017\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000bH\u0017¢\u0006\u0004\b\r\u0010\u000e¨\u0006\u000f"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$SelectPage$Companion;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$SelectPage;", "<init>", "()V", "Lcom/squareup/moshi/t;", "writer", "value", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$SelectPage;)V", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$SelectPage;", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Companion extends h {
                public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                    this();
                }

                @Override // com.squareup.moshi.h
                @z
                public void toJson(@NotNull t writer, SelectPage selectPage) {
                    Intrinsics.checkNotNullParameter(writer, "writer");
                }

                private Companion() {
                }

                @Override // com.squareup.moshi.h
                @f
                @NotNull
                public SelectPage fromJson(@NotNull m reader) {
                    Intrinsics.checkNotNullParameter(reader, "reader");
                    LinkedHashMap linkedHashMap = new LinkedHashMap();
                    reader.s();
                    String str = "";
                    String str2 = str;
                    String str3 = str2;
                    String str4 = null;
                    while (reader.hasNext()) {
                        String m02 = reader.m0();
                        if (m02 != null) {
                            switch (m02.hashCode()) {
                                case -979805852:
                                    if (!m02.equals("prompt")) {
                                        break;
                                    } else {
                                        str2 = reader.f1();
                                        continue;
                                    }
                                case 110371416:
                                    if (!m02.equals("title")) {
                                        break;
                                    } else {
                                        str = reader.f1();
                                        continue;
                                    }
                                case 432371099:
                                    if (!m02.equals("disclaimer")) {
                                        break;
                                    } else {
                                        str4 = JsonReaderUtilsKt.nextStringOrNull(reader);
                                        continue;
                                    }
                                case 1282023341:
                                    if (!m02.equals("optionNotice")) {
                                        break;
                                    } else {
                                        str3 = reader.f1();
                                        continue;
                                    }
                            }
                        }
                        if (reader.hasNext() && reader.E() == m.c.STRING) {
                            linkedHashMap.put(m02, reader.f1());
                        } else {
                            reader.P();
                        }
                    }
                    reader.z();
                    return new SelectPage(str, str2, str3, str4, linkedHashMap);
                }
            }

            @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Creator implements Parcelable.Creator<SelectPage> {
                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final SelectPage createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    String readString = parcel.readString();
                    String readString2 = parcel.readString();
                    String readString3 = parcel.readString();
                    String readString4 = parcel.readString();
                    int readInt = parcel.readInt();
                    LinkedHashMap linkedHashMap = new LinkedHashMap(readInt);
                    for (int i10 = 0; i10 != readInt; i10++) {
                        linkedHashMap.put(parcel.readString(), parcel.readString());
                    }
                    return new SelectPage(readString, readString2, readString3, readString4, linkedHashMap);
                }

                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final SelectPage[] newArray(int i10) {
                    return new SelectPage[i10];
                }
            }

            public SelectPage(@NotNull String title, @NotNull String prompt, @NotNull String choose, String str, @NotNull Map<String, String> idClassToName) {
                Intrinsics.checkNotNullParameter(title, "title");
                Intrinsics.checkNotNullParameter(prompt, "prompt");
                Intrinsics.checkNotNullParameter(choose, "choose");
                Intrinsics.checkNotNullParameter(idClassToName, "idClassToName");
                this.title = title;
                this.prompt = prompt;
                this.choose = choose;
                this.disclaimer = str;
                this.idClassToName = idClassToName;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            @NotNull
            public final String getChoose() {
                return this.choose;
            }

            public final String getDisclaimer() {
                return this.disclaimer;
            }

            @NotNull
            public final Map<String, String> getIdClassToName() {
                return this.idClassToName;
            }

            @NotNull
            public final String getPrompt() {
                return this.prompt;
            }

            @NotNull
            public final String getTitle() {
                return this.title;
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(@NotNull Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.title);
                dest.writeString(this.prompt);
                dest.writeString(this.choose);
                dest.writeString(this.disclaimer);
                Map<String, String> map = this.idClassToName;
                dest.writeInt(map.size());
                for (Map.Entry<String, String> entry : map.entrySet()) {
                    dest.writeString(entry.getKey());
                    dest.writeString(entry.getValue());
                }
            }
        }

        /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
        /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
        @i(generateAdapter = false)
        @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0007\b\u0087\u0081\u0002\u0018\u0000 \u00072\b\u0012\u0004\u0012\u00020\u00000\u0001:\u0001\u0007B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003j\u0002\b\u0004j\u0002\b\u0005j\u0002\b\u0006¨\u0006\b"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$VideoCaptureMethod;", "", "<init>", "(Ljava/lang/String;I)V", "Stream", "Upload", "None", "Companion", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class VideoCaptureMethod {
            private static final /* synthetic */ EnumEntries $ENTRIES;
            private static final /* synthetic */ VideoCaptureMethod[] $VALUES;
            @NotNull
            public static final Companion Companion;
            public static final VideoCaptureMethod Stream = new VideoCaptureMethod("Stream", 0);
            public static final VideoCaptureMethod Upload = new VideoCaptureMethod("Upload", 1);
            public static final VideoCaptureMethod None = new VideoCaptureMethod("None", 2);

            @Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0003\b\u0086\u0003\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u0017\u0010\u0007\u001a\u00020\u00022\u0006\u0010\u0006\u001a\u00020\u0005H\u0017¢\u0006\u0004\b\u0007\u0010\bJ!\u0010\r\u001a\u00020\f2\u0006\u0010\n\u001a\u00020\t2\b\u0010\u000b\u001a\u0004\u0018\u00010\u0002H\u0017¢\u0006\u0004\b\r\u0010\u000e¨\u0006\u000f"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$VideoCaptureMethod$Companion;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$VideoCaptureMethod;", "<init>", "()V", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$VideoCaptureMethod;", "Lcom/squareup/moshi/t;", "writer", "value", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$VideoCaptureMethod;)V", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Companion extends h {
                public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                    this();
                }

                @Override // com.squareup.moshi.h
                @z
                public void toJson(@NotNull t writer, VideoCaptureMethod videoCaptureMethod) {
                    Intrinsics.checkNotNullParameter(writer, "writer");
                }

                private Companion() {
                }

                @Override // com.squareup.moshi.h
                @f
                @NotNull
                public VideoCaptureMethod fromJson(@NotNull m reader) {
                    Intrinsics.checkNotNullParameter(reader, "reader");
                    Object V = reader.V();
                    return Intrinsics.areEqual(V, "stream") ? VideoCaptureMethod.Stream : Intrinsics.areEqual(V, "upload") ? VideoCaptureMethod.Upload : VideoCaptureMethod.None;
                }
            }

            private static final /* synthetic */ VideoCaptureMethod[] $values() {
                return new VideoCaptureMethod[]{Stream, Upload, None};
            }

            static {
                VideoCaptureMethod[] $values = $values();
                $VALUES = $values;
                $ENTRIES = vr.a.a($values);
                Companion = new Companion(null);
            }

            private VideoCaptureMethod(String str, int i10) {
            }

            @NotNull
            public static EnumEntries getEntries() {
                return $ENTRIES;
            }

            public static VideoCaptureMethod valueOf(String str) {
                return (VideoCaptureMethod) Enum.valueOf(VideoCaptureMethod.class, str);
            }

            public static VideoCaptureMethod[] values() {
                return (VideoCaptureMethod[]) $VALUES.clone();
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public GovernmentId(@NotNull String name, @NotNull Config config, StepStyles.GovernmentIdStepStyle governmentIdStepStyle) {
            super(name, null);
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(config, "config");
            this.name = name;
            this.config = config;
            this.styles = governmentIdStepStyle;
        }

        @NotNull
        public final Config getConfig() {
            return this.config;
        }

        @Override // com.withpersona.sdk2.inquiry.network.dto.NextStep
        @NotNull
        public String getName() {
            return this.name;
        }

        public final StepStyles.GovernmentIdStepStyle getStyles() {
            return this.styles;
        }
    }

    @i(generateAdapter = true)
    @Metadata(d1 = {"\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0014\b\u0007\u0018\u00002\u00020\u0001:\u000b\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001aB!\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\u0004\b\b\u0010\tR\u0014\u0010\u0002\u001a\u00020\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000bR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\rR\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000f¨\u0006\u001b"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie;", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep;", StackTraceHelper.NAME_KEY, "", "config", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$Config;", "styles", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$SelfieStepStyle;", "<init>", "(Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$Config;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$SelfieStepStyle;)V", "getName", "()Ljava/lang/String;", "getConfig", "()Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$Config;", "getStyles", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$SelfieStepStyle;", "Config", "CaptureMethod", "CaptureFileType", "VideoCaptureMethod", "Localizations", "CapturePage", "PendingPage", "CheckPage", "PromptPage", "AssetConfig", "SelfiePose", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class Selfie extends NextStep {
        @NotNull
        private final Config config;
        @NotNull
        private final String name;
        private final StepStyles.SelfieStepStyle styles;

        @i(generateAdapter = true)
        @Metadata(d1 = {"\u0000@\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\n\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u00002\u00020\u0001:\u0002\u001d\u001eB\u001f\u0012\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\u000b\u0010\f\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\r\u001a\u0004\u0018\u00010\u0005HÆ\u0003J!\u0010\u000e\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005HÆ\u0001J\u0006\u0010\u000f\u001a\u00020\u0010J\u0013\u0010\u0011\u001a\u00020\u00122\b\u0010\u0013\u001a\u0004\u0018\u00010\u0014HÖ\u0003J\t\u0010\u0015\u001a\u00020\u0010HÖ\u0001J\t\u0010\u0016\u001a\u00020\u0017HÖ\u0001J\u0016\u0010\u0018\u001a\u00020\u00192\u0006\u0010\u001a\u001a\u00020\u001b2\u0006\u0010\u001c\u001a\u00020\u0010R\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\b\u0010\tR\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000b¨\u0006\u001f"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$AssetConfig;", "Landroid/os/Parcelable;", "promptPage", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$AssetConfig$PromptPage;", "recordPage", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$AssetConfig$RecordPage;", "<init>", "(Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$AssetConfig$PromptPage;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$AssetConfig$RecordPage;)V", "getPromptPage", "()Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$AssetConfig$PromptPage;", "getRecordPage", "()Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$AssetConfig$RecordPage;", "component1", "component2", "copy", "describeContents", "", "equals", "", "other", "", "hashCode", "toString", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "PromptPage", "RecordPage", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class AssetConfig implements Parcelable {
            @NotNull
            public static final Parcelable.Creator<AssetConfig> CREATOR = new Creator();
            private final PromptPage promptPage;
            private final RecordPage recordPage;

            @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Creator implements Parcelable.Creator<AssetConfig> {
                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final AssetConfig createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    return new AssetConfig(parcel.readInt() == 0 ? null : PromptPage.CREATOR.createFromParcel(parcel), parcel.readInt() != 0 ? RecordPage.CREATOR.createFromParcel(parcel) : null);
                }

                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final AssetConfig[] newArray(int i10) {
                    return new AssetConfig[i10];
                }
            }

            @i(generateAdapter = true)
            @Metadata(d1 = {"\u0000:\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0013\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0087\b\u0018\u00002\u00020\u0001BC\u0012\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\b\u0010\tJ\u000b\u0010\u0010\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\u0011\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\u0012\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\u0013\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\u0014\u001a\u0004\u0018\u00010\u0003HÆ\u0003JE\u0010\u0015\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u0003HÆ\u0001J\u0006\u0010\u0016\u001a\u00020\u0017J\u0013\u0010\u0018\u001a\u00020\u00192\b\u0010\u001a\u001a\u0004\u0018\u00010\u001bHÖ\u0003J\t\u0010\u001c\u001a\u00020\u0017HÖ\u0001J\t\u0010\u001d\u001a\u00020\u001eHÖ\u0001J\u0016\u0010\u001f\u001a\u00020 2\u0006\u0010!\u001a\u00020\"2\u0006\u0010#\u001a\u00020\u0017R\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000bR\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\u000bR\u0013\u0010\u0005\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u000bR\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000bR\u0013\u0010\u0007\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u000b¨\u0006$"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$AssetConfig$PromptPage;", "Landroid/os/Parcelable;", "headerPictograph", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;", "selfiePictograph", "selfieCenterPictograph", "selfieLeftPictograph", "selfieRightPictograph", "<init>", "(Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;)V", "getHeaderPictograph", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;", "getSelfiePictograph", "getSelfieCenterPictograph", "getSelfieLeftPictograph", "getSelfieRightPictograph", "component1", "component2", "component3", "component4", "component5", "copy", "describeContents", "", "equals", "", "other", "", "hashCode", "toString", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class PromptPage implements Parcelable {
                @NotNull
                public static final Parcelable.Creator<PromptPage> CREATOR = new Creator();
                private final RemoteImage headerPictograph;
                private final RemoteImage selfieCenterPictograph;
                private final RemoteImage selfieLeftPictograph;
                private final RemoteImage selfiePictograph;
                private final RemoteImage selfieRightPictograph;

                @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class Creator implements Parcelable.Creator<PromptPage> {
                    /* JADX WARN: Can't rename method to resolve collision */
                    @Override // android.os.Parcelable.Creator
                    public final PromptPage createFromParcel(Parcel parcel) {
                        Intrinsics.checkNotNullParameter(parcel, "parcel");
                        return new PromptPage(parcel.readInt() == 0 ? null : RemoteImage.CREATOR.createFromParcel(parcel), parcel.readInt() == 0 ? null : RemoteImage.CREATOR.createFromParcel(parcel), parcel.readInt() == 0 ? null : RemoteImage.CREATOR.createFromParcel(parcel), parcel.readInt() == 0 ? null : RemoteImage.CREATOR.createFromParcel(parcel), parcel.readInt() != 0 ? RemoteImage.CREATOR.createFromParcel(parcel) : null);
                    }

                    /* JADX WARN: Can't rename method to resolve collision */
                    @Override // android.os.Parcelable.Creator
                    public final PromptPage[] newArray(int i10) {
                        return new PromptPage[i10];
                    }
                }

                public PromptPage() {
                    this(null, null, null, null, null, 31, null);
                }

                public static /* synthetic */ PromptPage copy$default(PromptPage promptPage, RemoteImage remoteImage, RemoteImage remoteImage2, RemoteImage remoteImage3, RemoteImage remoteImage4, RemoteImage remoteImage5, int i10, Object obj) {
                    if ((i10 & 1) != 0) {
                        remoteImage = promptPage.headerPictograph;
                    }
                    if ((i10 & 2) != 0) {
                        remoteImage2 = promptPage.selfiePictograph;
                    }
                    if ((i10 & 4) != 0) {
                        remoteImage3 = promptPage.selfieCenterPictograph;
                    }
                    if ((i10 & 8) != 0) {
                        remoteImage4 = promptPage.selfieLeftPictograph;
                    }
                    if ((i10 & 16) != 0) {
                        remoteImage5 = promptPage.selfieRightPictograph;
                    }
                    RemoteImage remoteImage6 = remoteImage5;
                    RemoteImage remoteImage7 = remoteImage3;
                    return promptPage.copy(remoteImage, remoteImage2, remoteImage7, remoteImage4, remoteImage6);
                }

                public final RemoteImage component1() {
                    return this.headerPictograph;
                }

                public final RemoteImage component2() {
                    return this.selfiePictograph;
                }

                public final RemoteImage component3() {
                    return this.selfieCenterPictograph;
                }

                public final RemoteImage component4() {
                    return this.selfieLeftPictograph;
                }

                public final RemoteImage component5() {
                    return this.selfieRightPictograph;
                }

                @NotNull
                public final PromptPage copy(RemoteImage remoteImage, RemoteImage remoteImage2, RemoteImage remoteImage3, RemoteImage remoteImage4, RemoteImage remoteImage5) {
                    return new PromptPage(remoteImage, remoteImage2, remoteImage3, remoteImage4, remoteImage5);
                }

                @Override // android.os.Parcelable
                public final int describeContents() {
                    return 0;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if (obj instanceof PromptPage) {
                        PromptPage promptPage = (PromptPage) obj;
                        return Intrinsics.areEqual(this.headerPictograph, promptPage.headerPictograph) && Intrinsics.areEqual(this.selfiePictograph, promptPage.selfiePictograph) && Intrinsics.areEqual(this.selfieCenterPictograph, promptPage.selfieCenterPictograph) && Intrinsics.areEqual(this.selfieLeftPictograph, promptPage.selfieLeftPictograph) && Intrinsics.areEqual(this.selfieRightPictograph, promptPage.selfieRightPictograph);
                    }
                    return false;
                }

                public final RemoteImage getHeaderPictograph() {
                    return this.headerPictograph;
                }

                public final RemoteImage getSelfieCenterPictograph() {
                    return this.selfieCenterPictograph;
                }

                public final RemoteImage getSelfieLeftPictograph() {
                    return this.selfieLeftPictograph;
                }

                public final RemoteImage getSelfiePictograph() {
                    return this.selfiePictograph;
                }

                public final RemoteImage getSelfieRightPictograph() {
                    return this.selfieRightPictograph;
                }

                public int hashCode() {
                    RemoteImage remoteImage = this.headerPictograph;
                    int hashCode = (remoteImage == null ? 0 : remoteImage.hashCode()) * 31;
                    RemoteImage remoteImage2 = this.selfiePictograph;
                    int hashCode2 = (hashCode + (remoteImage2 == null ? 0 : remoteImage2.hashCode())) * 31;
                    RemoteImage remoteImage3 = this.selfieCenterPictograph;
                    int hashCode3 = (hashCode2 + (remoteImage3 == null ? 0 : remoteImage3.hashCode())) * 31;
                    RemoteImage remoteImage4 = this.selfieLeftPictograph;
                    int hashCode4 = (hashCode3 + (remoteImage4 == null ? 0 : remoteImage4.hashCode())) * 31;
                    RemoteImage remoteImage5 = this.selfieRightPictograph;
                    return hashCode4 + (remoteImage5 != null ? remoteImage5.hashCode() : 0);
                }

                @NotNull
                public String toString() {
                    RemoteImage remoteImage = this.headerPictograph;
                    RemoteImage remoteImage2 = this.selfiePictograph;
                    RemoteImage remoteImage3 = this.selfieCenterPictograph;
                    RemoteImage remoteImage4 = this.selfieLeftPictograph;
                    RemoteImage remoteImage5 = this.selfieRightPictograph;
                    return "PromptPage(headerPictograph=" + remoteImage + ", selfiePictograph=" + remoteImage2 + ", selfieCenterPictograph=" + remoteImage3 + ", selfieLeftPictograph=" + remoteImage4 + ", selfieRightPictograph=" + remoteImage5 + ")";
                }

                @Override // android.os.Parcelable
                public final void writeToParcel(@NotNull Parcel dest, int i10) {
                    Intrinsics.checkNotNullParameter(dest, "dest");
                    RemoteImage remoteImage = this.headerPictograph;
                    if (remoteImage == null) {
                        dest.writeInt(0);
                    } else {
                        dest.writeInt(1);
                        remoteImage.writeToParcel(dest, i10);
                    }
                    RemoteImage remoteImage2 = this.selfiePictograph;
                    if (remoteImage2 == null) {
                        dest.writeInt(0);
                    } else {
                        dest.writeInt(1);
                        remoteImage2.writeToParcel(dest, i10);
                    }
                    RemoteImage remoteImage3 = this.selfieCenterPictograph;
                    if (remoteImage3 == null) {
                        dest.writeInt(0);
                    } else {
                        dest.writeInt(1);
                        remoteImage3.writeToParcel(dest, i10);
                    }
                    RemoteImage remoteImage4 = this.selfieLeftPictograph;
                    if (remoteImage4 == null) {
                        dest.writeInt(0);
                    } else {
                        dest.writeInt(1);
                        remoteImage4.writeToParcel(dest, i10);
                    }
                    RemoteImage remoteImage5 = this.selfieRightPictograph;
                    if (remoteImage5 == null) {
                        dest.writeInt(0);
                        return;
                    }
                    dest.writeInt(1);
                    remoteImage5.writeToParcel(dest, i10);
                }

                public PromptPage(RemoteImage remoteImage, RemoteImage remoteImage2, RemoteImage remoteImage3, RemoteImage remoteImage4, RemoteImage remoteImage5) {
                    this.headerPictograph = remoteImage;
                    this.selfiePictograph = remoteImage2;
                    this.selfieCenterPictograph = remoteImage3;
                    this.selfieLeftPictograph = remoteImage4;
                    this.selfieRightPictograph = remoteImage5;
                }

                public /* synthetic */ PromptPage(RemoteImage remoteImage, RemoteImage remoteImage2, RemoteImage remoteImage3, RemoteImage remoteImage4, RemoteImage remoteImage5, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                    this((i10 & 1) != 0 ? null : remoteImage, (i10 & 2) != 0 ? null : remoteImage2, (i10 & 4) != 0 ? null : remoteImage3, (i10 & 8) != 0 ? null : remoteImage4, (i10 & 16) != 0 ? null : remoteImage5);
                }
            }

            @i(generateAdapter = true)
            @Metadata(d1 = {"\u0000:\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\r\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0087\b\u0018\u00002\u00020\u0001B+\u0012\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u0006\u0010\u0007J\u000b\u0010\f\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\r\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\u000e\u001a\u0004\u0018\u00010\u0003HÆ\u0003J-\u0010\u000f\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0003HÆ\u0001J\u0006\u0010\u0010\u001a\u00020\u0011J\u0013\u0010\u0012\u001a\u00020\u00132\b\u0010\u0014\u001a\u0004\u0018\u00010\u0015HÖ\u0003J\t\u0010\u0016\u001a\u00020\u0011HÖ\u0001J\t\u0010\u0017\u001a\u00020\u0018HÖ\u0001J\u0016\u0010\u0019\u001a\u00020\u001a2\u0006\u0010\u001b\u001a\u00020\u001c2\u0006\u0010\u001d\u001a\u00020\u0011R\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\b\u0010\tR\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\tR\u0013\u0010\u0005\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\t¨\u0006\u001e"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$AssetConfig$RecordPage;", "Landroid/os/Parcelable;", "loadingPictograph", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;", "selfieLeftPictograph", "selfieRightPictograph", "<init>", "(Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;)V", "getLoadingPictograph", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;", "getSelfieLeftPictograph", "getSelfieRightPictograph", "component1", "component2", "component3", "copy", "describeContents", "", "equals", "", "other", "", "hashCode", "toString", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class RecordPage implements Parcelable {
                @NotNull
                public static final Parcelable.Creator<RecordPage> CREATOR = new Creator();
                private final RemoteImage loadingPictograph;
                private final RemoteImage selfieLeftPictograph;
                private final RemoteImage selfieRightPictograph;

                @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class Creator implements Parcelable.Creator<RecordPage> {
                    /* JADX WARN: Can't rename method to resolve collision */
                    @Override // android.os.Parcelable.Creator
                    public final RecordPage createFromParcel(Parcel parcel) {
                        Intrinsics.checkNotNullParameter(parcel, "parcel");
                        return new RecordPage(parcel.readInt() == 0 ? null : RemoteImage.CREATOR.createFromParcel(parcel), parcel.readInt() == 0 ? null : RemoteImage.CREATOR.createFromParcel(parcel), parcel.readInt() != 0 ? RemoteImage.CREATOR.createFromParcel(parcel) : null);
                    }

                    /* JADX WARN: Can't rename method to resolve collision */
                    @Override // android.os.Parcelable.Creator
                    public final RecordPage[] newArray(int i10) {
                        return new RecordPage[i10];
                    }
                }

                public RecordPage() {
                    this(null, null, null, 7, null);
                }

                public static /* synthetic */ RecordPage copy$default(RecordPage recordPage, RemoteImage remoteImage, RemoteImage remoteImage2, RemoteImage remoteImage3, int i10, Object obj) {
                    if ((i10 & 1) != 0) {
                        remoteImage = recordPage.loadingPictograph;
                    }
                    if ((i10 & 2) != 0) {
                        remoteImage2 = recordPage.selfieLeftPictograph;
                    }
                    if ((i10 & 4) != 0) {
                        remoteImage3 = recordPage.selfieRightPictograph;
                    }
                    return recordPage.copy(remoteImage, remoteImage2, remoteImage3);
                }

                public final RemoteImage component1() {
                    return this.loadingPictograph;
                }

                public final RemoteImage component2() {
                    return this.selfieLeftPictograph;
                }

                public final RemoteImage component3() {
                    return this.selfieRightPictograph;
                }

                @NotNull
                public final RecordPage copy(RemoteImage remoteImage, RemoteImage remoteImage2, RemoteImage remoteImage3) {
                    return new RecordPage(remoteImage, remoteImage2, remoteImage3);
                }

                @Override // android.os.Parcelable
                public final int describeContents() {
                    return 0;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if (obj instanceof RecordPage) {
                        RecordPage recordPage = (RecordPage) obj;
                        return Intrinsics.areEqual(this.loadingPictograph, recordPage.loadingPictograph) && Intrinsics.areEqual(this.selfieLeftPictograph, recordPage.selfieLeftPictograph) && Intrinsics.areEqual(this.selfieRightPictograph, recordPage.selfieRightPictograph);
                    }
                    return false;
                }

                public final RemoteImage getLoadingPictograph() {
                    return this.loadingPictograph;
                }

                public final RemoteImage getSelfieLeftPictograph() {
                    return this.selfieLeftPictograph;
                }

                public final RemoteImage getSelfieRightPictograph() {
                    return this.selfieRightPictograph;
                }

                public int hashCode() {
                    RemoteImage remoteImage = this.loadingPictograph;
                    int hashCode = (remoteImage == null ? 0 : remoteImage.hashCode()) * 31;
                    RemoteImage remoteImage2 = this.selfieLeftPictograph;
                    int hashCode2 = (hashCode + (remoteImage2 == null ? 0 : remoteImage2.hashCode())) * 31;
                    RemoteImage remoteImage3 = this.selfieRightPictograph;
                    return hashCode2 + (remoteImage3 != null ? remoteImage3.hashCode() : 0);
                }

                @NotNull
                public String toString() {
                    RemoteImage remoteImage = this.loadingPictograph;
                    RemoteImage remoteImage2 = this.selfieLeftPictograph;
                    RemoteImage remoteImage3 = this.selfieRightPictograph;
                    return "RecordPage(loadingPictograph=" + remoteImage + ", selfieLeftPictograph=" + remoteImage2 + ", selfieRightPictograph=" + remoteImage3 + ")";
                }

                @Override // android.os.Parcelable
                public final void writeToParcel(@NotNull Parcel dest, int i10) {
                    Intrinsics.checkNotNullParameter(dest, "dest");
                    RemoteImage remoteImage = this.loadingPictograph;
                    if (remoteImage == null) {
                        dest.writeInt(0);
                    } else {
                        dest.writeInt(1);
                        remoteImage.writeToParcel(dest, i10);
                    }
                    RemoteImage remoteImage2 = this.selfieLeftPictograph;
                    if (remoteImage2 == null) {
                        dest.writeInt(0);
                    } else {
                        dest.writeInt(1);
                        remoteImage2.writeToParcel(dest, i10);
                    }
                    RemoteImage remoteImage3 = this.selfieRightPictograph;
                    if (remoteImage3 == null) {
                        dest.writeInt(0);
                        return;
                    }
                    dest.writeInt(1);
                    remoteImage3.writeToParcel(dest, i10);
                }

                public RecordPage(RemoteImage remoteImage, RemoteImage remoteImage2, RemoteImage remoteImage3) {
                    this.loadingPictograph = remoteImage;
                    this.selfieLeftPictograph = remoteImage2;
                    this.selfieRightPictograph = remoteImage3;
                }

                public /* synthetic */ RecordPage(RemoteImage remoteImage, RemoteImage remoteImage2, RemoteImage remoteImage3, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                    this((i10 & 1) != 0 ? null : remoteImage, (i10 & 2) != 0 ? null : remoteImage2, (i10 & 4) != 0 ? null : remoteImage3);
                }
            }

            public AssetConfig() {
                this(null, null, 3, null);
            }

            public static /* synthetic */ AssetConfig copy$default(AssetConfig assetConfig, PromptPage promptPage, RecordPage recordPage, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    promptPage = assetConfig.promptPage;
                }
                if ((i10 & 2) != 0) {
                    recordPage = assetConfig.recordPage;
                }
                return assetConfig.copy(promptPage, recordPage);
            }

            public final PromptPage component1() {
                return this.promptPage;
            }

            public final RecordPage component2() {
                return this.recordPage;
            }

            @NotNull
            public final AssetConfig copy(PromptPage promptPage, RecordPage recordPage) {
                return new AssetConfig(promptPage, recordPage);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof AssetConfig) {
                    AssetConfig assetConfig = (AssetConfig) obj;
                    return Intrinsics.areEqual(this.promptPage, assetConfig.promptPage) && Intrinsics.areEqual(this.recordPage, assetConfig.recordPage);
                }
                return false;
            }

            public final PromptPage getPromptPage() {
                return this.promptPage;
            }

            public final RecordPage getRecordPage() {
                return this.recordPage;
            }

            public int hashCode() {
                PromptPage promptPage = this.promptPage;
                int hashCode = (promptPage == null ? 0 : promptPage.hashCode()) * 31;
                RecordPage recordPage = this.recordPage;
                return hashCode + (recordPage != null ? recordPage.hashCode() : 0);
            }

            @NotNull
            public String toString() {
                PromptPage promptPage = this.promptPage;
                RecordPage recordPage = this.recordPage;
                return "AssetConfig(promptPage=" + promptPage + ", recordPage=" + recordPage + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(@NotNull Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                PromptPage promptPage = this.promptPage;
                if (promptPage == null) {
                    dest.writeInt(0);
                } else {
                    dest.writeInt(1);
                    promptPage.writeToParcel(dest, i10);
                }
                RecordPage recordPage = this.recordPage;
                if (recordPage == null) {
                    dest.writeInt(0);
                    return;
                }
                dest.writeInt(1);
                recordPage.writeToParcel(dest, i10);
            }

            public AssetConfig(PromptPage promptPage, RecordPage recordPage) {
                this.promptPage = promptPage;
                this.recordPage = recordPage;
            }

            public /* synthetic */ AssetConfig(PromptPage promptPage, RecordPage recordPage, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this((i10 & 1) != 0 ? null : promptPage, (i10 & 2) != 0 ? null : recordPage);
            }
        }

        /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
        /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
        @i(generateAdapter = false)
        @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0007\b\u0087\u0081\u0002\u0018\u0000 \u00072\b\u0012\u0004\u0012\u00020\u00000\u0001:\u0001\u0007B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003j\u0002\b\u0004j\u0002\b\u0005j\u0002\b\u0006¨\u0006\b"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$CaptureFileType;", "", "<init>", "(Ljava/lang/String;I)V", "Image", "Video", "Unknown", "Companion", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class CaptureFileType {
            private static final /* synthetic */ EnumEntries $ENTRIES;
            private static final /* synthetic */ CaptureFileType[] $VALUES;
            @NotNull
            public static final Companion Companion;
            public static final CaptureFileType Image = new CaptureFileType("Image", 0);
            public static final CaptureFileType Video = new CaptureFileType("Video", 1);
            public static final CaptureFileType Unknown = new CaptureFileType("Unknown", 2);

            @Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0003\b\u0086\u0003\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u0017\u0010\u0007\u001a\u00020\u00022\u0006\u0010\u0006\u001a\u00020\u0005H\u0017¢\u0006\u0004\b\u0007\u0010\bJ!\u0010\r\u001a\u00020\f2\u0006\u0010\n\u001a\u00020\t2\b\u0010\u000b\u001a\u0004\u0018\u00010\u0002H\u0017¢\u0006\u0004\b\r\u0010\u000e¨\u0006\u000f"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$CaptureFileType$Companion;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$CaptureFileType;", "<init>", "()V", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$CaptureFileType;", "Lcom/squareup/moshi/t;", "writer", "value", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$CaptureFileType;)V", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Companion extends h {
                public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                    this();
                }

                @Override // com.squareup.moshi.h
                @z
                public void toJson(@NotNull t writer, CaptureFileType captureFileType) {
                    Intrinsics.checkNotNullParameter(writer, "writer");
                }

                private Companion() {
                }

                @Override // com.squareup.moshi.h
                @f
                @NotNull
                public CaptureFileType fromJson(@NotNull m reader) {
                    Intrinsics.checkNotNullParameter(reader, "reader");
                    Object V = reader.V();
                    return Intrinsics.areEqual(V, MediaStreamTrack.VIDEO_TRACK_KIND) ? CaptureFileType.Video : Intrinsics.areEqual(V, "image") ? CaptureFileType.Image : CaptureFileType.Unknown;
                }
            }

            private static final /* synthetic */ CaptureFileType[] $values() {
                return new CaptureFileType[]{Image, Video, Unknown};
            }

            static {
                CaptureFileType[] $values = $values();
                $VALUES = $values;
                $ENTRIES = vr.a.a($values);
                Companion = new Companion(null);
            }

            private CaptureFileType(String str, int i10) {
            }

            @NotNull
            public static EnumEntries getEntries() {
                return $ENTRIES;
            }

            public static CaptureFileType valueOf(String str) {
                return (CaptureFileType) Enum.valueOf(CaptureFileType.class, str);
            }

            public static CaptureFileType[] values() {
                return (CaptureFileType[]) $VALUES.clone();
            }
        }

        /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
        /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
        @i(generateAdapter = false)
        @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0006\b\u0087\u0081\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003j\u0002\b\u0004j\u0002\b\u0005j\u0002\b\u0006¨\u0006\u0007"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$CaptureMethod;", "", "<init>", "(Ljava/lang/String;I)V", "ONLY_CENTER", "PROFILE_AND_CENTER", "CONFIGURABLE_POSES", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class CaptureMethod {
            private static final /* synthetic */ EnumEntries $ENTRIES;
            private static final /* synthetic */ CaptureMethod[] $VALUES;
            @g(name = "only_center")
            public static final CaptureMethod ONLY_CENTER = new CaptureMethod("ONLY_CENTER", 0);
            @g(name = "profile_and_center")
            public static final CaptureMethod PROFILE_AND_CENTER = new CaptureMethod("PROFILE_AND_CENTER", 1);
            @g(name = "configurable_poses")
            public static final CaptureMethod CONFIGURABLE_POSES = new CaptureMethod("CONFIGURABLE_POSES", 2);

            private static final /* synthetic */ CaptureMethod[] $values() {
                return new CaptureMethod[]{ONLY_CENTER, PROFILE_AND_CENTER, CONFIGURABLE_POSES};
            }

            static {
                CaptureMethod[] $values = $values();
                $VALUES = $values;
                $ENTRIES = vr.a.a($values);
            }

            private CaptureMethod(String str, int i10) {
            }

            @NotNull
            public static EnumEntries getEntries() {
                return $ENTRIES;
            }

            public static CaptureMethod valueOf(String str) {
                return (CaptureMethod) Enum.valueOf(CaptureMethod.class, str);
            }

            public static CaptureMethod[] values() {
                return (CaptureMethod[]) $VALUES.clone();
            }
        }

        @i(generateAdapter = true)
        @Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b%\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0007\u0018\u00002\u00020\u0001B\u009d\u0001\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0003\u0012\u0006\u0010\u0007\u001a\u00020\u0003\u0012\u0006\u0010\b\u001a\u00020\u0003\u0012\u0006\u0010\t\u001a\u00020\u0003\u0012\u0006\u0010\n\u001a\u00020\u0003\u0012\u0006\u0010\u000b\u001a\u00020\u0003\u0012\u0006\u0010\f\u001a\u00020\u0003\u0012\u0006\u0010\r\u001a\u00020\u0003\u0012\b\u0010\u000e\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u000f\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0010\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0011\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0012\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0013\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u0014\u0010\u0015J\u0006\u0010(\u001a\u00020)J\u0016\u0010*\u001a\u00020+2\u0006\u0010,\u001a\u00020-2\u0006\u0010.\u001a\u00020)R\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0016\u0010\u0017R\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0018\u0010\u0017R\u0011\u0010\u0005\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0019\u0010\u0017R\u0011\u0010\u0006\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u001a\u0010\u0017R\u0011\u0010\u0007\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u001b\u0010\u0017R\u0011\u0010\b\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u001c\u0010\u0017R\u0011\u0010\t\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u001d\u0010\u0017R\u0011\u0010\n\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u001e\u0010\u0017R\u0011\u0010\u000b\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u001f\u0010\u0017R\u0011\u0010\f\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b \u0010\u0017R\u0011\u0010\r\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b!\u0010\u0017R\u0013\u0010\u000e\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\"\u0010\u0017R\u0013\u0010\u000f\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b#\u0010\u0017R\u0013\u0010\u0010\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b$\u0010\u0017R\u0013\u0010\u0011\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b%\u0010\u0017R\u0013\u0010\u0012\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b&\u0010\u0017R\u0013\u0010\u0013\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b'\u0010\u0017¨\u0006/"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$CapturePage;", "Landroid/os/Parcelable;", "title", "", "selfieHintTakePhoto", "selfieHintCenterFace", "selfieHintFaceTooClose", "selfieHintFaceTooFar", "selfieHintMultipleFaces", "selfieHintFaceIncomplete", "selfieHintPoseNotCenter", "selfieHintLookLeft", "selfieHintLookRight", "selfieHintHoldStill", "autoCaptureOn", "captureSuccess", "selfieHintCenterFaceDescription", "selfieHintLookLeftDescription", "selfieHintLookRightDescription", "cameraLoadingTitle", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", "getTitle", "()Ljava/lang/String;", "getSelfieHintTakePhoto", "getSelfieHintCenterFace", "getSelfieHintFaceTooClose", "getSelfieHintFaceTooFar", "getSelfieHintMultipleFaces", "getSelfieHintFaceIncomplete", "getSelfieHintPoseNotCenter", "getSelfieHintLookLeft", "getSelfieHintLookRight", "getSelfieHintHoldStill", "getAutoCaptureOn", "getCaptureSuccess", "getSelfieHintCenterFaceDescription", "getSelfieHintLookLeftDescription", "getSelfieHintLookRightDescription", "getCameraLoadingTitle", "describeContents", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class CapturePage implements Parcelable {
            @NotNull
            public static final Parcelable.Creator<CapturePage> CREATOR = new Creator();
            private final String autoCaptureOn;
            private final String cameraLoadingTitle;
            private final String captureSuccess;
            @NotNull
            private final String selfieHintCenterFace;
            private final String selfieHintCenterFaceDescription;
            @NotNull
            private final String selfieHintFaceIncomplete;
            @NotNull
            private final String selfieHintFaceTooClose;
            @NotNull
            private final String selfieHintFaceTooFar;
            @NotNull
            private final String selfieHintHoldStill;
            @NotNull
            private final String selfieHintLookLeft;
            private final String selfieHintLookLeftDescription;
            @NotNull
            private final String selfieHintLookRight;
            private final String selfieHintLookRightDescription;
            @NotNull
            private final String selfieHintMultipleFaces;
            @NotNull
            private final String selfieHintPoseNotCenter;
            @NotNull
            private final String selfieHintTakePhoto;
            private final String title;

            @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Creator implements Parcelable.Creator<CapturePage> {
                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final CapturePage createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    return new CapturePage(parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString());
                }

                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final CapturePage[] newArray(int i10) {
                    return new CapturePage[i10];
                }
            }

            public CapturePage(String str, @NotNull String selfieHintTakePhoto, @NotNull String selfieHintCenterFace, @NotNull String selfieHintFaceTooClose, @NotNull String selfieHintFaceTooFar, @NotNull String selfieHintMultipleFaces, @NotNull String selfieHintFaceIncomplete, @NotNull String selfieHintPoseNotCenter, @NotNull String selfieHintLookLeft, @NotNull String selfieHintLookRight, @NotNull String selfieHintHoldStill, String str2, String str3, String str4, String str5, String str6, String str7) {
                Intrinsics.checkNotNullParameter(selfieHintTakePhoto, "selfieHintTakePhoto");
                Intrinsics.checkNotNullParameter(selfieHintCenterFace, "selfieHintCenterFace");
                Intrinsics.checkNotNullParameter(selfieHintFaceTooClose, "selfieHintFaceTooClose");
                Intrinsics.checkNotNullParameter(selfieHintFaceTooFar, "selfieHintFaceTooFar");
                Intrinsics.checkNotNullParameter(selfieHintMultipleFaces, "selfieHintMultipleFaces");
                Intrinsics.checkNotNullParameter(selfieHintFaceIncomplete, "selfieHintFaceIncomplete");
                Intrinsics.checkNotNullParameter(selfieHintPoseNotCenter, "selfieHintPoseNotCenter");
                Intrinsics.checkNotNullParameter(selfieHintLookLeft, "selfieHintLookLeft");
                Intrinsics.checkNotNullParameter(selfieHintLookRight, "selfieHintLookRight");
                Intrinsics.checkNotNullParameter(selfieHintHoldStill, "selfieHintHoldStill");
                this.title = str;
                this.selfieHintTakePhoto = selfieHintTakePhoto;
                this.selfieHintCenterFace = selfieHintCenterFace;
                this.selfieHintFaceTooClose = selfieHintFaceTooClose;
                this.selfieHintFaceTooFar = selfieHintFaceTooFar;
                this.selfieHintMultipleFaces = selfieHintMultipleFaces;
                this.selfieHintFaceIncomplete = selfieHintFaceIncomplete;
                this.selfieHintPoseNotCenter = selfieHintPoseNotCenter;
                this.selfieHintLookLeft = selfieHintLookLeft;
                this.selfieHintLookRight = selfieHintLookRight;
                this.selfieHintHoldStill = selfieHintHoldStill;
                this.autoCaptureOn = str2;
                this.captureSuccess = str3;
                this.selfieHintCenterFaceDescription = str4;
                this.selfieHintLookLeftDescription = str5;
                this.selfieHintLookRightDescription = str6;
                this.cameraLoadingTitle = str7;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public final String getAutoCaptureOn() {
                return this.autoCaptureOn;
            }

            public final String getCameraLoadingTitle() {
                return this.cameraLoadingTitle;
            }

            public final String getCaptureSuccess() {
                return this.captureSuccess;
            }

            @NotNull
            public final String getSelfieHintCenterFace() {
                return this.selfieHintCenterFace;
            }

            public final String getSelfieHintCenterFaceDescription() {
                return this.selfieHintCenterFaceDescription;
            }

            @NotNull
            public final String getSelfieHintFaceIncomplete() {
                return this.selfieHintFaceIncomplete;
            }

            @NotNull
            public final String getSelfieHintFaceTooClose() {
                return this.selfieHintFaceTooClose;
            }

            @NotNull
            public final String getSelfieHintFaceTooFar() {
                return this.selfieHintFaceTooFar;
            }

            @NotNull
            public final String getSelfieHintHoldStill() {
                return this.selfieHintHoldStill;
            }

            @NotNull
            public final String getSelfieHintLookLeft() {
                return this.selfieHintLookLeft;
            }

            public final String getSelfieHintLookLeftDescription() {
                return this.selfieHintLookLeftDescription;
            }

            @NotNull
            public final String getSelfieHintLookRight() {
                return this.selfieHintLookRight;
            }

            public final String getSelfieHintLookRightDescription() {
                return this.selfieHintLookRightDescription;
            }

            @NotNull
            public final String getSelfieHintMultipleFaces() {
                return this.selfieHintMultipleFaces;
            }

            @NotNull
            public final String getSelfieHintPoseNotCenter() {
                return this.selfieHintPoseNotCenter;
            }

            @NotNull
            public final String getSelfieHintTakePhoto() {
                return this.selfieHintTakePhoto;
            }

            public final String getTitle() {
                return this.title;
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(@NotNull Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.title);
                dest.writeString(this.selfieHintTakePhoto);
                dest.writeString(this.selfieHintCenterFace);
                dest.writeString(this.selfieHintFaceTooClose);
                dest.writeString(this.selfieHintFaceTooFar);
                dest.writeString(this.selfieHintMultipleFaces);
                dest.writeString(this.selfieHintFaceIncomplete);
                dest.writeString(this.selfieHintPoseNotCenter);
                dest.writeString(this.selfieHintLookLeft);
                dest.writeString(this.selfieHintLookRight);
                dest.writeString(this.selfieHintHoldStill);
                dest.writeString(this.autoCaptureOn);
                dest.writeString(this.captureSuccess);
                dest.writeString(this.selfieHintCenterFaceDescription);
                dest.writeString(this.selfieHintLookLeftDescription);
                dest.writeString(this.selfieHintLookRightDescription);
                dest.writeString(this.cameraLoadingTitle);
            }
        }

        @i(generateAdapter = true)
        @Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0011\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0007\u0018\u00002\u00020\u0001BM\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\b\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\t\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\n\u0010\u000bJ\u0006\u0010\u0014\u001a\u00020\u0015J\u0016\u0010\u0016\u001a\u00020\u00172\u0006\u0010\u0018\u001a\u00020\u00192\u0006\u0010\u001a\u001a\u00020\u0015R\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\rR\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\rR\u0013\u0010\u0005\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\rR\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\rR\u0013\u0010\u0007\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\rR\u0013\u0010\b\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\rR\u0013\u0010\t\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\r¨\u0006\u001b"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$CheckPage;", "Landroid/os/Parcelable;", "title", "", "description", "selfieLabelFront", "selfieLabelLeft", "selfieLabelRight", "btnSubmit", "btnRetake", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", "getTitle", "()Ljava/lang/String;", "getDescription", "getSelfieLabelFront", "getSelfieLabelLeft", "getSelfieLabelRight", "getBtnSubmit", "getBtnRetake", "describeContents", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class CheckPage implements Parcelable {
            @NotNull
            public static final Parcelable.Creator<CheckPage> CREATOR = new Creator();
            private final String btnRetake;
            private final String btnSubmit;
            private final String description;
            private final String selfieLabelFront;
            private final String selfieLabelLeft;
            private final String selfieLabelRight;
            private final String title;

            @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Creator implements Parcelable.Creator<CheckPage> {
                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final CheckPage createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    return new CheckPage(parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString());
                }

                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final CheckPage[] newArray(int i10) {
                    return new CheckPage[i10];
                }
            }

            public CheckPage(String str, String str2, String str3, String str4, String str5, String str6, String str7) {
                this.title = str;
                this.description = str2;
                this.selfieLabelFront = str3;
                this.selfieLabelLeft = str4;
                this.selfieLabelRight = str5;
                this.btnSubmit = str6;
                this.btnRetake = str7;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public final String getBtnRetake() {
                return this.btnRetake;
            }

            public final String getBtnSubmit() {
                return this.btnSubmit;
            }

            public final String getDescription() {
                return this.description;
            }

            public final String getSelfieLabelFront() {
                return this.selfieLabelFront;
            }

            public final String getSelfieLabelLeft() {
                return this.selfieLabelLeft;
            }

            public final String getSelfieLabelRight() {
                return this.selfieLabelRight;
            }

            public final String getTitle() {
                return this.title;
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(@NotNull Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.title);
                dest.writeString(this.description);
                dest.writeString(this.selfieLabelFront);
                dest.writeString(this.selfieLabelLeft);
                dest.writeString(this.selfieLabelRight);
                dest.writeString(this.btnSubmit);
                dest.writeString(this.btnRetake);
            }
        }

        @i(generateAdapter = true)
        @Metadata(d1 = {"\u0000Z\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u001e\b\u0007\u0018\u00002\u00020\u0001B·\u0001\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0005\u0012\u0006\u0010\u0007\u001a\u00020\b\u0012\u0006\u0010\t\u001a\u00020\n\u0012\u0006\u0010\u000b\u001a\u00020\u0005\u0012\b\u0010\f\u001a\u0004\u0018\u00010\u0005\u0012\u000e\u0010\r\u001a\n\u0012\u0004\u0012\u00020\u000f\u0018\u00010\u000e\u0012\u000e\u0010\u0010\u001a\n\u0012\u0004\u0012\u00020\u0011\u0018\u00010\u000e\u0012\u0006\u0010\u0012\u001a\u00020\u0013\u0012\n\b\u0001\u0010\u0014\u001a\u0004\u0018\u00010\n\u0012\u000e\u0010\u0015\u001a\n\u0012\u0004\u0012\u00020\u0016\u0018\u00010\u000e\u0012\b\u0010\u0017\u001a\u0004\u0018\u00010\u0018\u0012\b\u0010\u0019\u001a\u0004\u0018\u00010\u0005\u0012\u000e\u0010\u001a\u001a\n\u0012\u0004\u0012\u00020\u001b\u0018\u00010\u000e\u0012\b\u0010\u001c\u001a\u0004\u0018\u00010\u001d¢\u0006\u0004\b\u001e\u0010\u001fR\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b \u0010!R\u0015\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\n\n\u0002\u0010$\u001a\u0004\b\"\u0010#R\u0015\u0010\u0006\u001a\u0004\u0018\u00010\u0005¢\u0006\n\n\u0002\u0010$\u001a\u0004\b%\u0010#R\u0011\u0010\u0007\u001a\u00020\b¢\u0006\b\n\u0000\u001a\u0004\b&\u0010'R\u0011\u0010\t\u001a\u00020\n¢\u0006\b\n\u0000\u001a\u0004\b(\u0010)R\u0011\u0010\u000b\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b*\u0010+R\u0015\u0010\f\u001a\u0004\u0018\u00010\u0005¢\u0006\n\n\u0002\u0010$\u001a\u0004\b,\u0010#R\u0019\u0010\r\u001a\n\u0012\u0004\u0012\u00020\u000f\u0018\u00010\u000e¢\u0006\b\n\u0000\u001a\u0004\b-\u0010.R\u0019\u0010\u0010\u001a\n\u0012\u0004\u0012\u00020\u0011\u0018\u00010\u000e¢\u0006\b\n\u0000\u001a\u0004\b/\u0010.R\u0011\u0010\u0012\u001a\u00020\u0013¢\u0006\b\n\u0000\u001a\u0004\b0\u00101R\u0013\u0010\u0014\u001a\u0004\u0018\u00010\n¢\u0006\b\n\u0000\u001a\u0004\b2\u0010)R\u0019\u0010\u0015\u001a\n\u0012\u0004\u0012\u00020\u0016\u0018\u00010\u000e¢\u0006\b\n\u0000\u001a\u0004\b3\u0010.R\u0013\u0010\u0017\u001a\u0004\u0018\u00010\u0018¢\u0006\b\n\u0000\u001a\u0004\b4\u00105R\u0015\u0010\u0019\u001a\u0004\u0018\u00010\u0005¢\u0006\n\n\u0002\u0010$\u001a\u0004\b6\u0010#R\u0019\u0010\u001a\u001a\n\u0012\u0004\u0012\u00020\u001b\u0018\u00010\u000e¢\u0006\b\n\u0000\u001a\u0004\b7\u0010.R\u0015\u0010\u001c\u001a\u0004\u0018\u00010\u001d¢\u0006\n\n\u0002\u0010:\u001a\u0004\b8\u00109¨\u0006;"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$Config;", "", "selfieType", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$CaptureMethod;", "backStepEnabled", "", "cancelButtonEnabled", "localizations", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$Localizations;", "fieldKeySelfie", "", "requireStrictSelfieCapture", "skipPromptPage", "enabledCaptureFileTypes", "", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$CaptureFileType;", "videoCaptureMethods", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$VideoCaptureMethod;", "assets", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$AssetConfig;", "videoSessionJwt", "orderedPoses", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$SelfiePose;", "pendingPageTextVerticalPosition", "Lcom/withpersona/sdk2/inquiry/network/dto/PendingPageTextPosition;", "audioEnabled", "poseConfigs", "Lcom/withpersona/sdk2/inquiry/network/dto/selfie/PoseConfig;", "designVersion", "", "<init>", "(Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$CaptureMethod;Ljava/lang/Boolean;Ljava/lang/Boolean;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$Localizations;Ljava/lang/String;ZLjava/lang/Boolean;Ljava/util/List;Ljava/util/List;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$AssetConfig;Ljava/lang/String;Ljava/util/List;Lcom/withpersona/sdk2/inquiry/network/dto/PendingPageTextPosition;Ljava/lang/Boolean;Ljava/util/List;Ljava/lang/Integer;)V", "getSelfieType", "()Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$CaptureMethod;", "getBackStepEnabled", "()Ljava/lang/Boolean;", "Ljava/lang/Boolean;", "getCancelButtonEnabled", "getLocalizations", "()Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$Localizations;", "getFieldKeySelfie", "()Ljava/lang/String;", "getRequireStrictSelfieCapture", "()Z", "getSkipPromptPage", "getEnabledCaptureFileTypes", "()Ljava/util/List;", "getVideoCaptureMethods", "getAssets", "()Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$AssetConfig;", "getVideoSessionJwt", "getOrderedPoses", "getPendingPageTextVerticalPosition", "()Lcom/withpersona/sdk2/inquiry/network/dto/PendingPageTextPosition;", "getAudioEnabled", "getPoseConfigs", "getDesignVersion", "()Ljava/lang/Integer;", "Ljava/lang/Integer;", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Config {
            @NotNull
            private final AssetConfig assets;
            private final Boolean audioEnabled;
            private final Boolean backStepEnabled;
            private final Boolean cancelButtonEnabled;
            private final Integer designVersion;
            private final List<CaptureFileType> enabledCaptureFileTypes;
            @NotNull
            private final String fieldKeySelfie;
            @NotNull
            private final Localizations localizations;
            private final List<SelfiePose> orderedPoses;
            private final PendingPageTextPosition pendingPageTextVerticalPosition;
            private final List<PoseConfig> poseConfigs;
            private final boolean requireStrictSelfieCapture;
            @NotNull
            private final CaptureMethod selfieType;
            private final Boolean skipPromptPage;
            private final List<VideoCaptureMethod> videoCaptureMethods;
            private final String videoSessionJwt;

            /* JADX WARN: Multi-variable type inference failed */
            public Config(@NotNull CaptureMethod selfieType, Boolean bool, Boolean bool2, @NotNull Localizations localizations, @NotNull String fieldKeySelfie, boolean z10, Boolean bool3, List<? extends CaptureFileType> list, List<? extends VideoCaptureMethod> list2, @NotNull AssetConfig assets, @g(name = "videoSessionJWT") String str, List<? extends SelfiePose> list3, PendingPageTextPosition pendingPageTextPosition, Boolean bool4, List<PoseConfig> list4, Integer num) {
                Intrinsics.checkNotNullParameter(selfieType, "selfieType");
                Intrinsics.checkNotNullParameter(localizations, "localizations");
                Intrinsics.checkNotNullParameter(fieldKeySelfie, "fieldKeySelfie");
                Intrinsics.checkNotNullParameter(assets, "assets");
                this.selfieType = selfieType;
                this.backStepEnabled = bool;
                this.cancelButtonEnabled = bool2;
                this.localizations = localizations;
                this.fieldKeySelfie = fieldKeySelfie;
                this.requireStrictSelfieCapture = z10;
                this.skipPromptPage = bool3;
                this.enabledCaptureFileTypes = list;
                this.videoCaptureMethods = list2;
                this.assets = assets;
                this.videoSessionJwt = str;
                this.orderedPoses = list3;
                this.pendingPageTextVerticalPosition = pendingPageTextPosition;
                this.audioEnabled = bool4;
                this.poseConfigs = list4;
                this.designVersion = num;
            }

            @NotNull
            public final AssetConfig getAssets() {
                return this.assets;
            }

            public final Boolean getAudioEnabled() {
                return this.audioEnabled;
            }

            public final Boolean getBackStepEnabled() {
                return this.backStepEnabled;
            }

            public final Boolean getCancelButtonEnabled() {
                return this.cancelButtonEnabled;
            }

            public final Integer getDesignVersion() {
                return this.designVersion;
            }

            public final List<CaptureFileType> getEnabledCaptureFileTypes() {
                return this.enabledCaptureFileTypes;
            }

            @NotNull
            public final String getFieldKeySelfie() {
                return this.fieldKeySelfie;
            }

            @NotNull
            public final Localizations getLocalizations() {
                return this.localizations;
            }

            public final List<SelfiePose> getOrderedPoses() {
                return this.orderedPoses;
            }

            public final PendingPageTextPosition getPendingPageTextVerticalPosition() {
                return this.pendingPageTextVerticalPosition;
            }

            public final List<PoseConfig> getPoseConfigs() {
                return this.poseConfigs;
            }

            public final boolean getRequireStrictSelfieCapture() {
                return this.requireStrictSelfieCapture;
            }

            @NotNull
            public final CaptureMethod getSelfieType() {
                return this.selfieType;
            }

            public final Boolean getSkipPromptPage() {
                return this.skipPromptPage;
            }

            public final List<VideoCaptureMethod> getVideoCaptureMethods() {
                return this.videoCaptureMethods;
            }

            public final String getVideoSessionJwt() {
                return this.videoSessionJwt;
            }
        }

        @i(generateAdapter = true)
        @Metadata(d1 = {"\u0000>\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\r\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0007\u0018\u00002\u00020\u0001B3\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\b\u0010\b\u001a\u0004\u0018\u00010\t\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u000b¢\u0006\u0004\b\f\u0010\rJ\u0006\u0010\u0018\u001a\u00020\u0019J\u0016\u0010\u001a\u001a\u00020\u001b2\u0006\u0010\u001c\u001a\u00020\u001d2\u0006\u0010\u001e\u001a\u00020\u0019R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000fR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u0011R\u0011\u0010\u0006\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0013R\u0013\u0010\b\u001a\u0004\u0018\u00010\t¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u0015R\u0013\u0010\n\u001a\u0004\u0018\u00010\u000b¢\u0006\b\n\u0000\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u001f"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$Localizations;", "Landroid/os/Parcelable;", "promptPage", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$PromptPage;", "capturePage", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$CapturePage;", "pendingPage", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$PendingPage;", "cancelDialog", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$CancelDialog;", "checkPage", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$CheckPage;", "<init>", "(Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$PromptPage;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$CapturePage;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$PendingPage;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$CancelDialog;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$CheckPage;)V", "getPromptPage", "()Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$PromptPage;", "getCapturePage", "()Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$CapturePage;", "getPendingPage", "()Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$PendingPage;", "getCancelDialog", "()Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$CancelDialog;", "getCheckPage", "()Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$CheckPage;", "describeContents", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Localizations implements Parcelable {
            @NotNull
            public static final Parcelable.Creator<Localizations> CREATOR = new Creator();
            private final CancelDialog cancelDialog;
            @NotNull
            private final CapturePage capturePage;
            private final CheckPage checkPage;
            @NotNull
            private final PendingPage pendingPage;
            @NotNull
            private final PromptPage promptPage;

            @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Creator implements Parcelable.Creator<Localizations> {
                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final Localizations createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    return new Localizations(PromptPage.CREATOR.createFromParcel(parcel), CapturePage.CREATOR.createFromParcel(parcel), PendingPage.CREATOR.createFromParcel(parcel), parcel.readInt() == 0 ? null : CancelDialog.CREATOR.createFromParcel(parcel), parcel.readInt() != 0 ? CheckPage.CREATOR.createFromParcel(parcel) : null);
                }

                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final Localizations[] newArray(int i10) {
                    return new Localizations[i10];
                }
            }

            public Localizations(@NotNull PromptPage promptPage, @NotNull CapturePage capturePage, @NotNull PendingPage pendingPage, CancelDialog cancelDialog, CheckPage checkPage) {
                Intrinsics.checkNotNullParameter(promptPage, "promptPage");
                Intrinsics.checkNotNullParameter(capturePage, "capturePage");
                Intrinsics.checkNotNullParameter(pendingPage, "pendingPage");
                this.promptPage = promptPage;
                this.capturePage = capturePage;
                this.pendingPage = pendingPage;
                this.cancelDialog = cancelDialog;
                this.checkPage = checkPage;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public final CancelDialog getCancelDialog() {
                return this.cancelDialog;
            }

            @NotNull
            public final CapturePage getCapturePage() {
                return this.capturePage;
            }

            public final CheckPage getCheckPage() {
                return this.checkPage;
            }

            @NotNull
            public final PendingPage getPendingPage() {
                return this.pendingPage;
            }

            @NotNull
            public final PromptPage getPromptPage() {
                return this.promptPage;
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(@NotNull Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                this.promptPage.writeToParcel(dest, i10);
                this.capturePage.writeToParcel(dest, i10);
                this.pendingPage.writeToParcel(dest, i10);
                CancelDialog cancelDialog = this.cancelDialog;
                if (cancelDialog == null) {
                    dest.writeInt(0);
                } else {
                    dest.writeInt(1);
                    cancelDialog.writeToParcel(dest, i10);
                }
                CheckPage checkPage = this.checkPage;
                if (checkPage == null) {
                    dest.writeInt(0);
                    return;
                }
                dest.writeInt(1);
                checkPage.writeToParcel(dest, i10);
            }
        }

        @i(generateAdapter = true)
        @Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0007\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0007\u0018\u00002\u00020\u0001B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u0006\u0010\n\u001a\u00020\u000bJ\u0016\u0010\f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\u000f2\u0006\u0010\u0010\u001a\u00020\u000bR\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0007\u0010\bR\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\b¨\u0006\u0011"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$PendingPage;", "Landroid/os/Parcelable;", "title", "", "description", "<init>", "(Ljava/lang/String;Ljava/lang/String;)V", "getTitle", "()Ljava/lang/String;", "getDescription", "describeContents", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class PendingPage implements Parcelable {
            @NotNull
            public static final Parcelable.Creator<PendingPage> CREATOR = new Creator();
            @NotNull
            private final String description;
            @NotNull
            private final String title;

            @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Creator implements Parcelable.Creator<PendingPage> {
                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final PendingPage createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    return new PendingPage(parcel.readString(), parcel.readString());
                }

                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final PendingPage[] newArray(int i10) {
                    return new PendingPage[i10];
                }
            }

            public PendingPage(@NotNull String title, @NotNull String description) {
                Intrinsics.checkNotNullParameter(title, "title");
                Intrinsics.checkNotNullParameter(description, "description");
                this.title = title;
                this.description = description;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            @NotNull
            public final String getDescription() {
                return this.description;
            }

            @NotNull
            public final String getTitle() {
                return this.title;
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(@NotNull Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.title);
                dest.writeString(this.description);
            }
        }

        @i(generateAdapter = true)
        @Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u001d\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0007\u0018\u00002\u00020\u0001B\u008d\u0001\u0012\b\b\u0001\u0010\u0002\u001a\u00020\u0003\u0012\b\b\u0001\u0010\u0004\u001a\u00020\u0003\u0012\b\b\u0001\u0010\u0005\u001a\u00020\u0003\u0012\b\b\u0001\u0010\u0006\u001a\u00020\u0003\u0012\b\b\u0001\u0010\u0007\u001a\u00020\u0003\u0012\b\u0010\b\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\t\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0001\u0010\n\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0001\u0010\u000b\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\f\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\r\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u000e\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u000f\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u0010\u0010\u0011J\u0006\u0010 \u001a\u00020!J\u0016\u0010\"\u001a\u00020#2\u0006\u0010$\u001a\u00020%2\u0006\u0010&\u001a\u00020!R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0013R\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u0013R\u0011\u0010\u0005\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u0013R\u0011\u0010\u0006\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0016\u0010\u0013R\u0011\u0010\u0007\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0017\u0010\u0013R\u0013\u0010\b\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0018\u0010\u0013R\u0013\u0010\t\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0019\u0010\u0013R\u0013\u0010\n\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u001a\u0010\u0013R\u0013\u0010\u000b\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u001b\u0010\u0013R\u0013\u0010\f\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u001c\u0010\u0013R\u0013\u0010\r\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u001d\u0010\u0013R\u0013\u0010\u000e\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u001e\u0010\u0013R\u0013\u0010\u000f\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u001f\u0010\u0013¨\u0006'"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$PromptPage;", "Landroid/os/Parcelable;", "title", "", "prompt", "promptCenter", "disclosure", "buttonSubmit", "cameraPermissionsTitle", "cameraPermissionsPrompt", "cameraPermissionsAllowButtonText", "cameraPermissionsCancelButtonText", "microphonePermissionsBtnCancel", "microphonePermissionsBtnContinueMobile", "microphonePermissionsPrompt", "microphonePermissionsTitle", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", "getTitle", "()Ljava/lang/String;", "getPrompt", "getPromptCenter", "getDisclosure", "getButtonSubmit", "getCameraPermissionsTitle", "getCameraPermissionsPrompt", "getCameraPermissionsAllowButtonText", "getCameraPermissionsCancelButtonText", "getMicrophonePermissionsBtnCancel", "getMicrophonePermissionsBtnContinueMobile", "getMicrophonePermissionsPrompt", "getMicrophonePermissionsTitle", "describeContents", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class PromptPage implements Parcelable {
            @NotNull
            public static final Parcelable.Creator<PromptPage> CREATOR = new Creator();
            @NotNull
            private final String buttonSubmit;
            private final String cameraPermissionsAllowButtonText;
            private final String cameraPermissionsCancelButtonText;
            private final String cameraPermissionsPrompt;
            private final String cameraPermissionsTitle;
            @NotNull
            private final String disclosure;
            private final String microphonePermissionsBtnCancel;
            private final String microphonePermissionsBtnContinueMobile;
            private final String microphonePermissionsPrompt;
            private final String microphonePermissionsTitle;
            @NotNull
            private final String prompt;
            @NotNull
            private final String promptCenter;
            @NotNull
            private final String title;

            @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Creator implements Parcelable.Creator<PromptPage> {
                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final PromptPage createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    return new PromptPage(parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString());
                }

                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final PromptPage[] newArray(int i10) {
                    return new PromptPage[i10];
                }
            }

            public PromptPage(@g(name = "selfieTitle") @NotNull String title, @g(name = "selfiePrompt") @NotNull String prompt, @g(name = "selfiePromptCenter") @NotNull String promptCenter, @g(name = "agreeToPolicy") @NotNull String disclosure, @g(name = "btnSubmit") @NotNull String buttonSubmit, String str, String str2, @g(name = "cameraPermissionsBtnContinueMobile") String str3, @g(name = "cameraPermissionsBtnCancel") String str4, String str5, String str6, String str7, String str8) {
                Intrinsics.checkNotNullParameter(title, "title");
                Intrinsics.checkNotNullParameter(prompt, "prompt");
                Intrinsics.checkNotNullParameter(promptCenter, "promptCenter");
                Intrinsics.checkNotNullParameter(disclosure, "disclosure");
                Intrinsics.checkNotNullParameter(buttonSubmit, "buttonSubmit");
                this.title = title;
                this.prompt = prompt;
                this.promptCenter = promptCenter;
                this.disclosure = disclosure;
                this.buttonSubmit = buttonSubmit;
                this.cameraPermissionsTitle = str;
                this.cameraPermissionsPrompt = str2;
                this.cameraPermissionsAllowButtonText = str3;
                this.cameraPermissionsCancelButtonText = str4;
                this.microphonePermissionsBtnCancel = str5;
                this.microphonePermissionsBtnContinueMobile = str6;
                this.microphonePermissionsPrompt = str7;
                this.microphonePermissionsTitle = str8;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            @NotNull
            public final String getButtonSubmit() {
                return this.buttonSubmit;
            }

            public final String getCameraPermissionsAllowButtonText() {
                return this.cameraPermissionsAllowButtonText;
            }

            public final String getCameraPermissionsCancelButtonText() {
                return this.cameraPermissionsCancelButtonText;
            }

            public final String getCameraPermissionsPrompt() {
                return this.cameraPermissionsPrompt;
            }

            public final String getCameraPermissionsTitle() {
                return this.cameraPermissionsTitle;
            }

            @NotNull
            public final String getDisclosure() {
                return this.disclosure;
            }

            public final String getMicrophonePermissionsBtnCancel() {
                return this.microphonePermissionsBtnCancel;
            }

            public final String getMicrophonePermissionsBtnContinueMobile() {
                return this.microphonePermissionsBtnContinueMobile;
            }

            public final String getMicrophonePermissionsPrompt() {
                return this.microphonePermissionsPrompt;
            }

            public final String getMicrophonePermissionsTitle() {
                return this.microphonePermissionsTitle;
            }

            @NotNull
            public final String getPrompt() {
                return this.prompt;
            }

            @NotNull
            public final String getPromptCenter() {
                return this.promptCenter;
            }

            @NotNull
            public final String getTitle() {
                return this.title;
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(@NotNull Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.title);
                dest.writeString(this.prompt);
                dest.writeString(this.promptCenter);
                dest.writeString(this.disclosure);
                dest.writeString(this.buttonSubmit);
                dest.writeString(this.cameraPermissionsTitle);
                dest.writeString(this.cameraPermissionsPrompt);
                dest.writeString(this.cameraPermissionsAllowButtonText);
                dest.writeString(this.cameraPermissionsCancelButtonText);
                dest.writeString(this.microphonePermissionsBtnCancel);
                dest.writeString(this.microphonePermissionsBtnContinueMobile);
                dest.writeString(this.microphonePermissionsPrompt);
                dest.writeString(this.microphonePermissionsTitle);
            }
        }

        /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
        /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
        @i(generateAdapter = false)
        @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0006\b\u0087\u0081\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003j\u0002\b\u0004j\u0002\b\u0005j\u0002\b\u0006¨\u0006\u0007"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$SelfiePose;", "", "<init>", "(Ljava/lang/String;I)V", "CENTER", "LEFT", "RIGHT", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class SelfiePose {
            private static final /* synthetic */ EnumEntries $ENTRIES;
            private static final /* synthetic */ SelfiePose[] $VALUES;
            @g(name = "center")
            public static final SelfiePose CENTER = new SelfiePose("CENTER", 0);
            @g(name = ViewProps.LEFT)
            public static final SelfiePose LEFT = new SelfiePose("LEFT", 1);
            @g(name = ViewProps.RIGHT)
            public static final SelfiePose RIGHT = new SelfiePose("RIGHT", 2);

            private static final /* synthetic */ SelfiePose[] $values() {
                return new SelfiePose[]{CENTER, LEFT, RIGHT};
            }

            static {
                SelfiePose[] $values = $values();
                $VALUES = $values;
                $ENTRIES = vr.a.a($values);
            }

            private SelfiePose(String str, int i10) {
            }

            @NotNull
            public static EnumEntries getEntries() {
                return $ENTRIES;
            }

            public static SelfiePose valueOf(String str) {
                return (SelfiePose) Enum.valueOf(SelfiePose.class, str);
            }

            public static SelfiePose[] values() {
                return (SelfiePose[]) $VALUES.clone();
            }
        }

        /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
        /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
        @i(generateAdapter = false)
        @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0007\b\u0087\u0081\u0002\u0018\u0000 \u00072\b\u0012\u0004\u0012\u00020\u00000\u0001:\u0001\u0007B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003j\u0002\b\u0004j\u0002\b\u0005j\u0002\b\u0006¨\u0006\b"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$VideoCaptureMethod;", "", "<init>", "(Ljava/lang/String;I)V", "Stream", "Upload", "None", "Companion", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class VideoCaptureMethod {
            private static final /* synthetic */ EnumEntries $ENTRIES;
            private static final /* synthetic */ VideoCaptureMethod[] $VALUES;
            @NotNull
            public static final Companion Companion;
            public static final VideoCaptureMethod Stream = new VideoCaptureMethod("Stream", 0);
            public static final VideoCaptureMethod Upload = new VideoCaptureMethod("Upload", 1);
            public static final VideoCaptureMethod None = new VideoCaptureMethod("None", 2);

            @Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0003\b\u0086\u0003\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u0017\u0010\u0007\u001a\u00020\u00022\u0006\u0010\u0006\u001a\u00020\u0005H\u0017¢\u0006\u0004\b\u0007\u0010\bJ!\u0010\r\u001a\u00020\f2\u0006\u0010\n\u001a\u00020\t2\b\u0010\u000b\u001a\u0004\u0018\u00010\u0002H\u0017¢\u0006\u0004\b\r\u0010\u000e¨\u0006\u000f"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$VideoCaptureMethod$Companion;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$VideoCaptureMethod;", "<init>", "()V", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$VideoCaptureMethod;", "Lcom/squareup/moshi/t;", "writer", "value", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$VideoCaptureMethod;)V", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Companion extends h {
                public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                    this();
                }

                @Override // com.squareup.moshi.h
                @z
                public void toJson(@NotNull t writer, VideoCaptureMethod videoCaptureMethod) {
                    Intrinsics.checkNotNullParameter(writer, "writer");
                }

                private Companion() {
                }

                @Override // com.squareup.moshi.h
                @f
                @NotNull
                public VideoCaptureMethod fromJson(@NotNull m reader) {
                    Intrinsics.checkNotNullParameter(reader, "reader");
                    Object V = reader.V();
                    return Intrinsics.areEqual(V, "stream") ? VideoCaptureMethod.Stream : Intrinsics.areEqual(V, "upload") ? VideoCaptureMethod.Upload : VideoCaptureMethod.None;
                }
            }

            private static final /* synthetic */ VideoCaptureMethod[] $values() {
                return new VideoCaptureMethod[]{Stream, Upload, None};
            }

            static {
                VideoCaptureMethod[] $values = $values();
                $VALUES = $values;
                $ENTRIES = vr.a.a($values);
                Companion = new Companion(null);
            }

            private VideoCaptureMethod(String str, int i10) {
            }

            @NotNull
            public static EnumEntries getEntries() {
                return $ENTRIES;
            }

            public static VideoCaptureMethod valueOf(String str) {
                return (VideoCaptureMethod) Enum.valueOf(VideoCaptureMethod.class, str);
            }

            public static VideoCaptureMethod[] values() {
                return (VideoCaptureMethod[]) $VALUES.clone();
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public Selfie(@NotNull String name, @NotNull Config config, StepStyles.SelfieStepStyle selfieStepStyle) {
            super(name, null);
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(config, "config");
            this.name = name;
            this.config = config;
            this.styles = selfieStepStyle;
        }

        @NotNull
        public final Config getConfig() {
            return this.config;
        }

        @Override // com.withpersona.sdk2.inquiry.network.dto.NextStep
        @NotNull
        public String getName() {
            return this.name;
        }

        public final StepStyles.SelfieStepStyle getStyles() {
            return this.styles;
        }
    }

    @i(generateAdapter = true)
    @Metadata(d1 = {"\u00006\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\b\u0007\u0018\u00002\u00020\u00012\u00020\u0002:\u0003\u0018\u0019\u001aB#\u0012\u0006\u0010\u0003\u001a\u00020\u0004\u0012\u0006\u0010\u0005\u001a\u00020\u0006\u0012\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\b¢\u0006\u0004\b\t\u0010\nJ\u0006\u0010\u0011\u001a\u00020\u0012J\u0016\u0010\u0013\u001a\u00020\u00142\u0006\u0010\u0015\u001a\u00020\u00162\u0006\u0010\u0017\u001a\u00020\u0012R\u0014\u0010\u0003\u001a\u00020\u0004X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\fR\u0011\u0010\u0005\u001a\u00020\u0006¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u000eR\u0013\u0010\u0007\u001a\u0004\u0018\u00010\b¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0010¨\u0006\u001b"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Ui;", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep;", "Landroid/os/Parcelable;", StackTraceHelper.NAME_KEY, "", "config", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Ui$Config;", "styles", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$UiStepStyle;", "<init>", "(Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Ui$Config;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$UiStepStyle;)V", "getName", "()Ljava/lang/String;", "getConfig", "()Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Ui$Config;", "getStyles", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$UiStepStyle;", "describeContents", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "Config", "Localizations", "PromptPage", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class Ui extends NextStep implements Parcelable {
        @NotNull
        public static final Parcelable.Creator<Ui> CREATOR = new Creator();
        @NotNull
        private final Config config;
        @NotNull
        private final String name;
        private final StepStyles.UiStepStyle styles;

        @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Creator implements Parcelable.Creator<Ui> {
            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final Ui createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new Ui(parcel.readString(), Config.CREATOR.createFromParcel(parcel), parcel.readInt() == 0 ? null : StepStyles.UiStepStyle.CREATOR.createFromParcel(parcel));
            }

            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final Ui[] newArray(int i10) {
                return new Ui[i10];
            }
        }

        @i(generateAdapter = true)
        @Metadata(d1 = {"\u0000,\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0007\u0018\u00002\u00020\u0001B\u001b\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\u0006\u0010\f\u001a\u00020\rJ\u0016\u0010\u000e\u001a\u00020\u000f2\u0006\u0010\u0010\u001a\u00020\u00112\u0006\u0010\u0012\u001a\u00020\rR\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\b\u0010\tR\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000b¨\u0006\u0013"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Ui$Localizations;", "Landroid/os/Parcelable;", "promptPage", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Ui$PromptPage;", "cancelDialog", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$CancelDialog;", "<init>", "(Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Ui$PromptPage;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$CancelDialog;)V", "getPromptPage", "()Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Ui$PromptPage;", "getCancelDialog", "()Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$CancelDialog;", "describeContents", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Localizations implements Parcelable {
            @NotNull
            public static final Parcelable.Creator<Localizations> CREATOR = new Creator();
            private final CancelDialog cancelDialog;
            private final PromptPage promptPage;

            @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Creator implements Parcelable.Creator<Localizations> {
                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final Localizations createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    return new Localizations(parcel.readInt() == 0 ? null : PromptPage.CREATOR.createFromParcel(parcel), parcel.readInt() != 0 ? CancelDialog.CREATOR.createFromParcel(parcel) : null);
                }

                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final Localizations[] newArray(int i10) {
                    return new Localizations[i10];
                }
            }

            public Localizations(PromptPage promptPage, CancelDialog cancelDialog) {
                this.promptPage = promptPage;
                this.cancelDialog = cancelDialog;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public final CancelDialog getCancelDialog() {
                return this.cancelDialog;
            }

            public final PromptPage getPromptPage() {
                return this.promptPage;
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(@NotNull Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                PromptPage promptPage = this.promptPage;
                if (promptPage == null) {
                    dest.writeInt(0);
                } else {
                    dest.writeInt(1);
                    promptPage.writeToParcel(dest, i10);
                }
                CancelDialog cancelDialog = this.cancelDialog;
                if (cancelDialog == null) {
                    dest.writeInt(0);
                    return;
                }
                dest.writeInt(1);
                cancelDialog.writeToParcel(dest, i10);
            }
        }

        @i(generateAdapter = true)
        @Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0011\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0007\u0018\u00002\u00020\u0001BQ\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0001\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0001\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\b\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\t\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\n\u0010\u000bJ\u0006\u0010\u0014\u001a\u00020\u0015J\u0016\u0010\u0016\u001a\u00020\u00172\u0006\u0010\u0018\u001a\u00020\u00192\u0006\u0010\u001a\u001a\u00020\u0015R\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\rR\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\rR\u0013\u0010\u0005\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\rR\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\rR\u0013\u0010\u0007\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\rR\u0013\u0010\b\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\rR\u0013\u0010\t\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\r¨\u0006\u001b"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Ui$PromptPage;", "Landroid/os/Parcelable;", "gpsPermissionsBtnCancel", "", "gpsPermissionsAllowButtonText", "gpsFeatureTurnOnText", "gpsPermissionsPrompt", "gpsPermissionsTitle", "gpsFeaturePrompt", "gpsFeatureTitle", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", "getGpsPermissionsBtnCancel", "()Ljava/lang/String;", "getGpsPermissionsAllowButtonText", "getGpsFeatureTurnOnText", "getGpsPermissionsPrompt", "getGpsPermissionsTitle", "getGpsFeaturePrompt", "getGpsFeatureTitle", "describeContents", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class PromptPage implements Parcelable {
            @NotNull
            public static final Parcelable.Creator<PromptPage> CREATOR = new Creator();
            private final String gpsFeaturePrompt;
            private final String gpsFeatureTitle;
            private final String gpsFeatureTurnOnText;
            private final String gpsPermissionsAllowButtonText;
            private final String gpsPermissionsBtnCancel;
            private final String gpsPermissionsPrompt;
            private final String gpsPermissionsTitle;

            @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Creator implements Parcelable.Creator<PromptPage> {
                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final PromptPage createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    return new PromptPage(parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString());
                }

                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final PromptPage[] newArray(int i10) {
                    return new PromptPage[i10];
                }
            }

            public PromptPage(String str, @g(name = "gpsPermissionsBtnContinueMobile") String str2, @g(name = "gpsDeviceFeatureBtnContinueMobile") String str3, String str4, String str5, String str6, String str7) {
                this.gpsPermissionsBtnCancel = str;
                this.gpsPermissionsAllowButtonText = str2;
                this.gpsFeatureTurnOnText = str3;
                this.gpsPermissionsPrompt = str4;
                this.gpsPermissionsTitle = str5;
                this.gpsFeaturePrompt = str6;
                this.gpsFeatureTitle = str7;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public final String getGpsFeaturePrompt() {
                return this.gpsFeaturePrompt;
            }

            public final String getGpsFeatureTitle() {
                return this.gpsFeatureTitle;
            }

            public final String getGpsFeatureTurnOnText() {
                return this.gpsFeatureTurnOnText;
            }

            public final String getGpsPermissionsAllowButtonText() {
                return this.gpsPermissionsAllowButtonText;
            }

            public final String getGpsPermissionsBtnCancel() {
                return this.gpsPermissionsBtnCancel;
            }

            public final String getGpsPermissionsPrompt() {
                return this.gpsPermissionsPrompt;
            }

            public final String getGpsPermissionsTitle() {
                return this.gpsPermissionsTitle;
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(@NotNull Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.gpsPermissionsBtnCancel);
                dest.writeString(this.gpsPermissionsAllowButtonText);
                dest.writeString(this.gpsFeatureTurnOnText);
                dest.writeString(this.gpsPermissionsPrompt);
                dest.writeString(this.gpsPermissionsTitle);
                dest.writeString(this.gpsFeaturePrompt);
                dest.writeString(this.gpsFeatureTitle);
            }
        }

        public /* synthetic */ Ui(String str, Config config, StepStyles.UiStepStyle uiStepStyle, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(str, config, (i10 & 4) != 0 ? null : uiStepStyle);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @NotNull
        public final Config getConfig() {
            return this.config;
        }

        @Override // com.withpersona.sdk2.inquiry.network.dto.NextStep
        @NotNull
        public String getName() {
            return this.name;
        }

        public final StepStyles.UiStepStyle getStyles() {
            return this.styles;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(@NotNull Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.name);
            this.config.writeToParcel(dest, i10);
            StepStyles.UiStepStyle uiStepStyle = this.styles;
            if (uiStepStyle == null) {
                dest.writeInt(0);
                return;
            }
            dest.writeInt(1);
            uiStepStyle.writeToParcel(dest, i10);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public Ui(@NotNull String name, @NotNull Config config, StepStyles.UiStepStyle uiStepStyle) {
            super(name, null);
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(config, "config");
            this.name = name;
            this.config = config;
            this.styles = uiStepStyle;
        }

        @i(generateAdapter = true)
        @Metadata(d1 = {"\u0000>\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\r\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0007\u0018\u00002\u00020\u0001BY\u0012\u000e\u0010\u0002\u001a\n\u0012\u0004\u0012\u00020\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0006\u0012\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u0006\u0012\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u0006\u0012\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\n\u0012\u0010\b\u0002\u0010\u000b\u001a\n\u0012\u0004\u0012\u00020\f\u0018\u00010\u0003¢\u0006\u0004\b\r\u0010\u000eJ\u0006\u0010\u0019\u001a\u00020\u001aJ\u0016\u0010\u001b\u001a\u00020\u001c2\u0006\u0010\u001d\u001a\u00020\u001e2\u0006\u0010\u001f\u001a\u00020\u001aR\u0019\u0010\u0002\u001a\n\u0012\u0004\u0012\u00020\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0010R\u0015\u0010\u0005\u001a\u0004\u0018\u00010\u0006¢\u0006\n\n\u0002\u0010\u0013\u001a\u0004\b\u0011\u0010\u0012R\u0015\u0010\u0007\u001a\u0004\u0018\u00010\u0006¢\u0006\n\n\u0002\u0010\u0013\u001a\u0004\b\u0014\u0010\u0012R\u0015\u0010\b\u001a\u0004\u0018\u00010\u0006¢\u0006\n\n\u0002\u0010\u0013\u001a\u0004\b\u0015\u0010\u0012R\u0013\u0010\t\u001a\u0004\u0018\u00010\n¢\u0006\b\n\u0000\u001a\u0004\b\u0016\u0010\u0017R\u0019\u0010\u000b\u001a\n\u0012\u0004\u0012\u00020\f\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0018\u0010\u0010¨\u0006 "}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Ui$Config;", "Landroid/os/Parcelable;", "components", "", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/UiComponentConfig;", "backStepEnabled", "", "cancelButtonEnabled", "terminal", "localizations", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Ui$Localizations;", "serverComponentErrors", "Lcom/withpersona/sdk2/inquiry/network/core/dto/UiComponentError;", "<init>", "(Ljava/util/List;Ljava/lang/Boolean;Ljava/lang/Boolean;Ljava/lang/Boolean;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Ui$Localizations;Ljava/util/List;)V", "getComponents", "()Ljava/util/List;", "getBackStepEnabled", "()Ljava/lang/Boolean;", "Ljava/lang/Boolean;", "getCancelButtonEnabled", "getTerminal", "getLocalizations", "()Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Ui$Localizations;", "getServerComponentErrors", "describeContents", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Config implements Parcelable {
            @NotNull
            public static final Parcelable.Creator<Config> CREATOR = new Creator();
            private final Boolean backStepEnabled;
            private final Boolean cancelButtonEnabled;
            private final List<UiComponentConfig> components;
            private final Localizations localizations;
            private final List<UiComponentError> serverComponentErrors;
            private final Boolean terminal;

            @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Creator implements Parcelable.Creator<Config> {
                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final Config createFromParcel(Parcel parcel) {
                    ArrayList arrayList;
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    ArrayList arrayList2 = null;
                    if (parcel.readInt() == 0) {
                        arrayList = null;
                    } else {
                        int readInt = parcel.readInt();
                        ArrayList arrayList3 = new ArrayList(readInt);
                        for (int i10 = 0; i10 != readInt; i10++) {
                            arrayList3.add(parcel.readParcelable(Config.class.getClassLoader()));
                        }
                        arrayList = arrayList3;
                    }
                    Boolean valueOf = parcel.readInt() == 0 ? null : Boolean.valueOf(parcel.readInt() != 0);
                    Boolean valueOf2 = parcel.readInt() == 0 ? null : Boolean.valueOf(parcel.readInt() != 0);
                    Boolean valueOf3 = parcel.readInt() == 0 ? null : Boolean.valueOf(parcel.readInt() != 0);
                    Localizations createFromParcel = parcel.readInt() == 0 ? null : Localizations.CREATOR.createFromParcel(parcel);
                    if (parcel.readInt() != 0) {
                        int readInt2 = parcel.readInt();
                        arrayList2 = new ArrayList(readInt2);
                        for (int i11 = 0; i11 != readInt2; i11++) {
                            arrayList2.add(parcel.readParcelable(Config.class.getClassLoader()));
                        }
                    }
                    return new Config(arrayList, valueOf, valueOf2, valueOf3, createFromParcel, arrayList2);
                }

                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final Config[] newArray(int i10) {
                    return new Config[i10];
                }
            }

            /* JADX WARN: Multi-variable type inference failed */
            public Config(List<? extends UiComponentConfig> list, Boolean bool, Boolean bool2, Boolean bool3, Localizations localizations, List<? extends UiComponentError> list2) {
                this.components = list;
                this.backStepEnabled = bool;
                this.cancelButtonEnabled = bool2;
                this.terminal = bool3;
                this.localizations = localizations;
                this.serverComponentErrors = list2;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public final Boolean getBackStepEnabled() {
                return this.backStepEnabled;
            }

            public final Boolean getCancelButtonEnabled() {
                return this.cancelButtonEnabled;
            }

            public final List<UiComponentConfig> getComponents() {
                return this.components;
            }

            public final Localizations getLocalizations() {
                return this.localizations;
            }

            public final List<UiComponentError> getServerComponentErrors() {
                return this.serverComponentErrors;
            }

            public final Boolean getTerminal() {
                return this.terminal;
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(@NotNull Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                List<UiComponentConfig> list = this.components;
                if (list == null) {
                    dest.writeInt(0);
                } else {
                    dest.writeInt(1);
                    dest.writeInt(list.size());
                    for (UiComponentConfig uiComponentConfig : list) {
                        dest.writeParcelable(uiComponentConfig, i10);
                    }
                }
                Boolean bool = this.backStepEnabled;
                if (bool == null) {
                    dest.writeInt(0);
                } else {
                    dest.writeInt(1);
                    dest.writeInt(bool.booleanValue() ? 1 : 0);
                }
                Boolean bool2 = this.cancelButtonEnabled;
                if (bool2 == null) {
                    dest.writeInt(0);
                } else {
                    dest.writeInt(1);
                    dest.writeInt(bool2.booleanValue() ? 1 : 0);
                }
                Boolean bool3 = this.terminal;
                if (bool3 == null) {
                    dest.writeInt(0);
                } else {
                    dest.writeInt(1);
                    dest.writeInt(bool3.booleanValue() ? 1 : 0);
                }
                Localizations localizations = this.localizations;
                if (localizations == null) {
                    dest.writeInt(0);
                } else {
                    dest.writeInt(1);
                    localizations.writeToParcel(dest, i10);
                }
                List<UiComponentError> list2 = this.serverComponentErrors;
                if (list2 == null) {
                    dest.writeInt(0);
                    return;
                }
                dest.writeInt(1);
                dest.writeInt(list2.size());
                for (UiComponentError uiComponentError : list2) {
                    dest.writeParcelable(uiComponentError, i10);
                }
            }

            public /* synthetic */ Config(List list, Boolean bool, Boolean bool2, Boolean bool3, Localizations localizations, List list2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this(list, (i10 & 2) != 0 ? null : bool, (i10 & 4) != 0 ? null : bool2, (i10 & 8) != 0 ? null : bool3, (i10 & 16) != 0 ? null : localizations, (i10 & 32) != 0 ? null : list2);
            }
        }
    }

    @Metadata(d1 = {"\u0000$\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\bÆ\n\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0013\u0010\u0004\u001a\u00020\u00052\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007HÖ\u0003J\t\u0010\b\u001a\u00020\tHÖ\u0001J\t\u0010\n\u001a\u00020\u000bHÖ\u0001¨\u0006\f"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Unknown;", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep;", "<init>", "()V", "equals", "", "other", "", "hashCode", "", "toString", "", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class Unknown extends NextStep {
        @NotNull
        public static final Unknown INSTANCE = new Unknown();

        private Unknown() {
            super("unknown", null);
        }

        public boolean equals(Object obj) {
            return this == obj || (obj instanceof Unknown);
        }

        public int hashCode() {
            return -1141780238;
        }

        @NotNull
        public String toString() {
            return "Unknown";
        }
    }

    public /* synthetic */ NextStep(String str, DefaultConstructorMarker defaultConstructorMarker) {
        this(str);
    }

    @NotNull
    public String getName() {
        return this.name;
    }

    private NextStep(String str) {
        this.name = str;
    }
}
