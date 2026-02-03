package android.support.v4.media.session;

import android.annotation.SuppressLint;
import android.os.Bundle;
import android.os.Parcel;
import android.os.Parcelable;
import android.text.TextUtils;
import java.util.List;
@SuppressLint({"BanParcelableUsage"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class PlaybackStateCompat implements Parcelable {
    public static final Parcelable.Creator<PlaybackStateCompat> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    final int f771d;

    /* renamed from: e  reason: collision with root package name */
    final long f772e;

    /* renamed from: i  reason: collision with root package name */
    final long f773i;

    /* renamed from: o  reason: collision with root package name */
    final float f774o;

    /* renamed from: p  reason: collision with root package name */
    final long f775p;

    /* renamed from: q  reason: collision with root package name */
    final int f776q;

    /* renamed from: r  reason: collision with root package name */
    final CharSequence f777r;

    /* renamed from: s  reason: collision with root package name */
    final long f778s;

    /* renamed from: t  reason: collision with root package name */
    List f779t;

    /* renamed from: u  reason: collision with root package name */
    final long f780u;

    /* renamed from: v  reason: collision with root package name */
    final Bundle f781v;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class CustomAction implements Parcelable {
        public static final Parcelable.Creator<CustomAction> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f782d;

        /* renamed from: e  reason: collision with root package name */
        private final CharSequence f783e;

        /* renamed from: i  reason: collision with root package name */
        private final int f784i;

        /* renamed from: o  reason: collision with root package name */
        private final Bundle f785o;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class a implements Parcelable.Creator {
            a() {
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public CustomAction createFromParcel(Parcel parcel) {
                return new CustomAction(parcel);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public CustomAction[] newArray(int i10) {
                return new CustomAction[i10];
            }
        }

        CustomAction(Parcel parcel) {
            this.f782d = parcel.readString();
            this.f783e = (CharSequence) TextUtils.CHAR_SEQUENCE_CREATOR.createFromParcel(parcel);
            this.f784i = parcel.readInt();
            this.f785o = parcel.readBundle(MediaSessionCompat.class.getClassLoader());
        }

        @Override // android.os.Parcelable
        public int describeContents() {
            return 0;
        }

        public String toString() {
            return "Action:mName='" + ((Object) this.f783e) + ", mIcon=" + this.f784i + ", mExtras=" + this.f785o;
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            parcel.writeString(this.f782d);
            TextUtils.writeToParcel(this.f783e, parcel, i10);
            parcel.writeInt(this.f784i);
            parcel.writeBundle(this.f785o);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Parcelable.Creator {
        a() {
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public PlaybackStateCompat createFromParcel(Parcel parcel) {
            return new PlaybackStateCompat(parcel);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public PlaybackStateCompat[] newArray(int i10) {
            return new PlaybackStateCompat[i10];
        }
    }

    PlaybackStateCompat(Parcel parcel) {
        this.f771d = parcel.readInt();
        this.f772e = parcel.readLong();
        this.f774o = parcel.readFloat();
        this.f778s = parcel.readLong();
        this.f773i = parcel.readLong();
        this.f775p = parcel.readLong();
        this.f777r = (CharSequence) TextUtils.CHAR_SEQUENCE_CREATOR.createFromParcel(parcel);
        this.f779t = parcel.createTypedArrayList(CustomAction.CREATOR);
        this.f780u = parcel.readLong();
        this.f781v = parcel.readBundle(MediaSessionCompat.class.getClassLoader());
        this.f776q = parcel.readInt();
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    public String toString() {
        return "PlaybackState {state=" + this.f771d + ", position=" + this.f772e + ", buffered position=" + this.f773i + ", speed=" + this.f774o + ", updated=" + this.f778s + ", actions=" + this.f775p + ", error code=" + this.f776q + ", error message=" + this.f777r + ", custom actions=" + this.f779t + ", active item id=" + this.f780u + "}";
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeInt(this.f771d);
        parcel.writeLong(this.f772e);
        parcel.writeFloat(this.f774o);
        parcel.writeLong(this.f778s);
        parcel.writeLong(this.f773i);
        parcel.writeLong(this.f775p);
        TextUtils.writeToParcel(this.f777r, parcel, i10);
        parcel.writeTypedList(this.f779t);
        parcel.writeLong(this.f780u);
        parcel.writeBundle(this.f781v);
        parcel.writeInt(this.f776q);
    }
}
