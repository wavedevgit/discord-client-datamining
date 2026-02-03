package ld;

import android.os.Parcel;
import android.os.Parcelable;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.google.android.exoplayer2.MediaMetadata;
import java.util.ArrayList;
import java.util.List;
import ji.s;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class m extends i {
    public static final Parcelable.Creator<m> CREATOR = new a();

    /* renamed from: e  reason: collision with root package name */
    public final String f36752e;

    /* renamed from: i  reason: collision with root package name */
    public final String f36753i;

    /* renamed from: o  reason: collision with root package name */
    public final s f36754o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Parcelable.Creator {
        a() {
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public m createFromParcel(Parcel parcel) {
            return new m(parcel, null);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public m[] newArray(int i10) {
            return new m[i10];
        }
    }

    /* synthetic */ m(Parcel parcel, a aVar) {
        this(parcel);
    }

    private static List a(String str) {
        ArrayList arrayList = new ArrayList();
        try {
            if (str.length() >= 10) {
                arrayList.add(Integer.valueOf(Integer.parseInt(str.substring(0, 4))));
                arrayList.add(Integer.valueOf(Integer.parseInt(str.substring(5, 7))));
                arrayList.add(Integer.valueOf(Integer.parseInt(str.substring(8, 10))));
                return arrayList;
            } else if (str.length() >= 7) {
                arrayList.add(Integer.valueOf(Integer.parseInt(str.substring(0, 4))));
                arrayList.add(Integer.valueOf(Integer.parseInt(str.substring(5, 7))));
                return arrayList;
            } else {
                if (str.length() >= 4) {
                    arrayList.add(Integer.valueOf(Integer.parseInt(str.substring(0, 4))));
                }
                return arrayList;
            }
        } catch (NumberFormatException unused) {
            return new ArrayList();
        }
    }

    /* JADX WARN: Can't fix incorrect switch cases order, some code will duplicate */
    @Override // com.google.android.exoplayer2.metadata.Metadata.b
    public void e1(MediaMetadata.b bVar) {
        Integer num;
        String str = this.f36741d;
        str.getClass();
        char c10 = 65535;
        switch (str.hashCode()) {
            case 82815:
                if (str.equals("TAL")) {
                    c10 = 0;
                    break;
                }
                break;
            case 82878:
                if (str.equals("TCM")) {
                    c10 = 1;
                    break;
                }
                break;
            case 82897:
                if (str.equals("TDA")) {
                    c10 = 2;
                    break;
                }
                break;
            case 83253:
                if (str.equals("TP1")) {
                    c10 = 3;
                    break;
                }
                break;
            case 83254:
                if (str.equals("TP2")) {
                    c10 = 4;
                    break;
                }
                break;
            case 83255:
                if (str.equals("TP3")) {
                    c10 = 5;
                    break;
                }
                break;
            case 83341:
                if (str.equals("TRK")) {
                    c10 = 6;
                    break;
                }
                break;
            case 83378:
                if (str.equals("TT2")) {
                    c10 = 7;
                    break;
                }
                break;
            case 83536:
                if (str.equals("TXT")) {
                    c10 = '\b';
                    break;
                }
                break;
            case 83552:
                if (str.equals("TYE")) {
                    c10 = '\t';
                    break;
                }
                break;
            case 2567331:
                if (str.equals("TALB")) {
                    c10 = '\n';
                    break;
                }
                break;
            case 2569357:
                if (str.equals("TCOM")) {
                    c10 = 11;
                    break;
                }
                break;
            case 2569891:
                if (str.equals("TDAT")) {
                    c10 = '\f';
                    break;
                }
                break;
            case 2570401:
                if (str.equals("TDRC")) {
                    c10 = '\r';
                    break;
                }
                break;
            case 2570410:
                if (str.equals("TDRL")) {
                    c10 = 14;
                    break;
                }
                break;
            case 2571565:
                if (str.equals("TEXT")) {
                    c10 = 15;
                    break;
                }
                break;
            case 2575251:
                if (str.equals("TIT2")) {
                    c10 = 16;
                    break;
                }
                break;
            case 2581512:
                if (str.equals("TPE1")) {
                    c10 = 17;
                    break;
                }
                break;
            case 2581513:
                if (str.equals("TPE2")) {
                    c10 = 18;
                    break;
                }
                break;
            case 2581514:
                if (str.equals("TPE3")) {
                    c10 = 19;
                    break;
                }
                break;
            case 2583398:
                if (str.equals("TRCK")) {
                    c10 = 20;
                    break;
                }
                break;
            case 2590194:
                if (str.equals("TYER")) {
                    c10 = 21;
                    break;
                }
                break;
        }
        try {
            switch (c10) {
                case 0:
                case '\n':
                    bVar.N((CharSequence) this.f36754o.get(0));
                    return;
                case 1:
                case 11:
                    bVar.S((CharSequence) this.f36754o.get(0));
                    return;
                case 2:
                case '\f':
                    String str2 = (String) this.f36754o.get(0);
                    bVar.f0(Integer.valueOf(Integer.parseInt(str2.substring(2, 4)))).e0(Integer.valueOf(Integer.parseInt(str2.substring(0, 2))));
                    return;
                case 3:
                case 17:
                    bVar.O((CharSequence) this.f36754o.get(0));
                    return;
                case 4:
                case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                    bVar.M((CharSequence) this.f36754o.get(0));
                    return;
                case 5:
                case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                    bVar.T((CharSequence) this.f36754o.get(0));
                    return;
                case 6:
                case 20:
                    String[] d12 = w0.d1((String) this.f36754o.get(0), "/");
                    int parseInt = Integer.parseInt(d12[0]);
                    if (d12.length > 1) {
                        num = Integer.valueOf(Integer.parseInt(d12[1]));
                    } else {
                        num = null;
                    }
                    bVar.p0(Integer.valueOf(parseInt)).o0(num);
                    return;
                case 7:
                case 16:
                    bVar.m0((CharSequence) this.f36754o.get(0));
                    return;
                case '\b':
                case 15:
                    bVar.r0((CharSequence) this.f36754o.get(0));
                    return;
                case '\t':
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                    bVar.g0(Integer.valueOf(Integer.parseInt((String) this.f36754o.get(0))));
                    return;
                case '\r':
                    List a10 = a((String) this.f36754o.get(0));
                    int size = a10.size();
                    if (size != 1) {
                        if (size != 2) {
                            if (size == 3) {
                                bVar.e0((Integer) a10.get(2));
                            } else {
                                return;
                            }
                        }
                        bVar.f0((Integer) a10.get(1));
                    }
                    bVar.g0((Integer) a10.get(0));
                    return;
                case 14:
                    List a11 = a((String) this.f36754o.get(0));
                    int size2 = a11.size();
                    if (size2 != 1) {
                        if (size2 != 2) {
                            if (size2 == 3) {
                                bVar.h0((Integer) a11.get(2));
                            } else {
                                return;
                            }
                        }
                        bVar.i0((Integer) a11.get(1));
                    }
                    bVar.j0((Integer) a11.get(0));
                    return;
                default:
                    return;
            }
        } catch (NumberFormatException | StringIndexOutOfBoundsException unused) {
        }
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && m.class == obj.getClass()) {
            m mVar = (m) obj;
            if (w0.c(this.f36741d, mVar.f36741d) && w0.c(this.f36752e, mVar.f36752e) && this.f36754o.equals(mVar.f36754o)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int hashCode = (527 + this.f36741d.hashCode()) * 31;
        String str = this.f36752e;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        return ((hashCode + i10) * 31) + this.f36754o.hashCode();
    }

    @Override // ld.i
    public String toString() {
        return this.f36741d + ": description=" + this.f36752e + ": values=" + this.f36754o;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f36741d);
        parcel.writeString(this.f36752e);
        parcel.writeStringArray((String[]) this.f36754o.toArray(new String[0]));
    }

    public m(String str, String str2, List list) {
        super(str);
        ne.a.a(!list.isEmpty());
        this.f36752e = str2;
        s m10 = s.m(list);
        this.f36754o = m10;
        this.f36753i = (String) m10.get(0);
    }

    private m(Parcel parcel) {
        this((String) ne.a.e(parcel.readString()), parcel.readString(), s.n((String[]) ne.a.e(parcel.createStringArray())));
    }
}
